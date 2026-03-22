import { google } from 'googleapis';
import { readFileSync } from 'fs';

const creds = JSON.parse(readFileSync('C:/Users/Utilisateur/Downloads/opexia-3a9b7d568837.json', 'utf8'));
const auth = new google.auth.GoogleAuth({
  credentials: creds,
  scopes: ['https://www.googleapis.com/auth/calendar'],
});
const calendar = google.calendar({ version: 'v3', auth });

// Créer un RDV mercredi 25 mars de 14h à 15h
const res = await calendar.events.insert({
  calendarId: 'opexiapro@gmail.com',
  requestBody: {
    summary: 'RDV Client Important - Test Live',
    start: { dateTime: '2026-03-25T14:00:00+01:00', timeZone: 'Europe/Paris' },
    end: { dateTime: '2026-03-25T15:00:00+01:00', timeZone: 'Europe/Paris' },
    description: 'Test pour vérifier le filtrage live sur opexia-formation.com',
  },
});
console.log('✅ RDV créé dans Google Calendar:');
console.log('   ' + res.data.summary);
console.log('   Mercredi 25 mars, 14h-15h');
