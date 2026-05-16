import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const C = {
  red: "#06B6D4",
  dark: "#0A0A0A",
  text: "#333333",
  muted: "#777777",
  light: "#F7F7F7",
  white: "#FFFFFF",
  border: "#E5E5E5",
};

const s = StyleSheet.create({
  page: {
    paddingTop: 60,
    paddingBottom: 60,
    paddingHorizontal: 60,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: C.text,
    backgroundColor: C.white,
  },

  /* Outer border */
  outerBorder: {
    borderWidth: 2,
    borderColor: C.dark,
    padding: 20,
    flex: 1,
  },
  innerBorder: {
    borderWidth: 0.5,
    borderColor: C.border,
    padding: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  /* Top red line accent */
  topAccent: {
    width: 60,
    height: 3,
    backgroundColor: C.red,
    marginBottom: 24,
  },

  /* Brand */
  brandName: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    letterSpacing: 2,
    marginBottom: 6,
  },
  brandAccent: {
    color: C.red,
  },
  academy: {
    fontSize: 10,
    color: C.muted,
    letterSpacing: 4,
    textTransform: "uppercase",
    marginBottom: 30,
  },

  /* Certificate label */
  certLabel: {
    fontSize: 8,
    color: C.muted,
    letterSpacing: 3,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  /* Certificate title */
  certTitle: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginBottom: 6,
    textAlign: "center",
    lineHeight: 1.2,
  },

  /* Description */
  certDesc: {
    fontSize: 10,
    color: C.muted,
    textAlign: "center",
    marginBottom: 30,
    maxWidth: 400,
    lineHeight: 1.5,
  },

  /* Divider */
  divider: {
    width: 40,
    height: 1,
    backgroundColor: C.border,
    marginBottom: 24,
  },

  /* Awarded to */
  awardedLabel: {
    fontSize: 8,
    color: C.muted,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  userName: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginBottom: 30,
    textAlign: "center",
  },

  /* Date */
  dateLabel: {
    fontSize: 8,
    color: C.muted,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  dateValue: {
    fontSize: 11,
    color: C.dark,
    marginBottom: 24,
  },

  /* Red bottom line */
  bottomAccent: {
    width: 60,
    height: 3,
    backgroundColor: C.red,
    marginTop: 20,
  },

  /* Certificate ID */
  certId: {
    fontSize: 7,
    color: C.muted,
    marginTop: 16,
    letterSpacing: 1,
  },
});

interface CertificateData {
  title: string;
  description: string;
  userName: string;
  date: string;
  certificateId: string;
}

export function CertificatePDF({ data }: { data: CertificateData }) {
  return (
    <Document
      title={`Certificat - ${data.title}`}
      author="OpexIA Academy"
    >
      <Page size="A4" orientation="landscape" style={s.page}>
        <View style={s.outerBorder}>
          <View style={s.innerBorder}>
            {/* Top accent */}
            <View style={s.topAccent} />

            {/* Brand */}
            <Text style={s.brandName}>
              OPEX<Text style={s.brandAccent}>IA</Text>
            </Text>
            <Text style={s.academy}>Academy</Text>

            {/* Certificate label */}
            <Text style={s.certLabel}>Certificat de Completion</Text>

            {/* Title */}
            <Text style={s.certTitle}>{data.title}</Text>
            <Text style={s.certDesc}>{data.description}</Text>

            {/* Divider */}
            <View style={s.divider} />

            {/* Awarded to */}
            <Text style={s.awardedLabel}>Decerne a</Text>
            <Text style={s.userName}>{data.userName}</Text>

            {/* Date */}
            <Text style={s.dateLabel}>Date d&apos;obtention</Text>
            <Text style={s.dateValue}>{data.date}</Text>

            {/* Bottom accent */}
            <View style={s.bottomAccent} />

            {/* Certificate ID */}
            <Text style={s.certId}>ID: {data.certificateId}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
