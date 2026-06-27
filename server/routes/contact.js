import { Router } from 'express';
import nodemailer from 'nodemailer';
import pool from '../db.js';

const router = Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'habycoulibaly69@gmail.com',
    pass: process.env.EMAIL_PASS,
  },
});

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, organization, message } = req.body;

    const result = await pool.query(
      'INSERT INTO contact_messages (name, email, phone, organization, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, organization, message]
    );

    const mailOptions = {
      from: 'habycoulibaly69@gmail.com',
      to: 'habycoulibaly69@gmail.com',
      subject: `Nouveau message de ${name} - CCF-TAMBA`,
      html: `
        <h3>Nouveau message depuis le site CCF-TAMBA</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Organisation :</strong> ${organization || 'Non renseignée'}</p>
        <hr />
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
