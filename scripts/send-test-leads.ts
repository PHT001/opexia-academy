import { Resend } from "resend";
import { guideEmail, leadFollowupDayOne, leadFollowupDayThree, leadFollowupDaySeven } from "../src/lib/email-templates";

const resend = new Resend("re_a79dhemu_Kht5RCtae8Aie3aWxU9UJStw");

async function main() {
  const emails = [
    { name: "Guide Lead Magnet (immédiat)", ...guideEmail() },
    { name: "Lead Follow-up J+1", ...leadFollowupDayOne() },
    { name: "Lead Follow-up J+3", ...leadFollowupDayThree() },
    { name: "Lead Follow-up J+7", ...leadFollowupDaySeven() },
  ];

  for (const e of emails) {
    try {
      const result = await resend.emails.send({
        from: "Marius d'OpexIA <support@opexia-formation.com>",
        to: "marius.augereau75@gmail.com",
        subject: `[TEST] ${e.subject}`,
        html: e.html,
      });
      console.log(`✅ Sent: ${e.name}`);
    } catch (err: any) {
      console.error(`❌ Error: ${e.name}`, err?.message || err);
    }
    await new Promise((r) => setTimeout(r, 600));
  }
  console.log("\nDone — check marius.augereau75@gmail.com!");
}

main();
