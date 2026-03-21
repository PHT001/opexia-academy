import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import type {
  ModuleRecap,
  LessonRecap,
  RecapElement,
} from "./extractRecapContent";

/* ─── OpexIA Brand Colors ─── */
const C = {
  red: "#FF1744",
  redLight: "#FFF0F2",
  redDark: "#D50000",
  dark: "#111111",
  text: "#333333",
  muted: "#888888",
  light: "#F5F5F5",
  white: "#FFFFFF",
  border: "#E0E0E0",
  borderLight: "#F0F0F0",
  green: "#00C853",
  greenBg: "#F0FFF4",
  amber: "#FF8F00",
  amberBg: "#FFFBF0",
  blue: "#2979FF",
  blueBg: "#F0F5FF",
};

const s = StyleSheet.create({
  page: {
    paddingTop: 50,
    paddingBottom: 65,
    paddingHorizontal: 50,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: C.text,
    lineHeight: 1.6,
    backgroundColor: C.white,
  },

  /* ── Cover ── */
  coverLabel: {
    fontSize: 9,
    color: C.muted,
    letterSpacing: 2,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  coverTitle: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginBottom: 6,
    lineHeight: 1.3,
  },
  coverDesc: {
    fontSize: 11,
    color: C.muted,
    marginBottom: 16,
  },
  coverLine: {
    height: 2,
    backgroundColor: C.red,
    marginBottom: 28,
  },

  /* ── Lesson header ── */
  lessonSection: {
    marginTop: 22,
    marginBottom: 6,
  },
  lessonTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginBottom: 8,
  },
  lessonPrefix: {
    color: C.red,
    fontFamily: "Helvetica-Bold",
  },
  lessonDivider: {
    height: 0.5,
    backgroundColor: C.border,
    marginBottom: 10,
  },

  /* ── Heading ── */
  h2: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: C.red,
    marginTop: 12,
    marginBottom: 5,
  },
  h3: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginTop: 8,
    marginBottom: 4,
  },

  /* ── Callout ── */
  callout: {
    borderLeftWidth: 3,
    padding: 10,
    marginVertical: 7,
    borderRadius: 2,
  },
  calloutLabel: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    marginBottom: 3,
  },
  calloutBody: {
    fontSize: 8.5,
    lineHeight: 1.5,
  },

  /* ── Bullets ── */
  bulletsWrap: {
    marginVertical: 5,
  },
  bulletsTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 2.5,
    paddingLeft: 2,
  },
  bulletDot: {
    width: 12,
    fontSize: 8,
    color: C.red,
    marginTop: 1,
  },
  bulletText: {
    flex: 1,
    fontSize: 8.5,
    color: C.text,
    lineHeight: 1.5,
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },

  /* ── Table ── */
  tableWrap: {
    marginVertical: 7,
    borderWidth: 0.5,
    borderColor: C.border,
    borderRadius: 3,
    overflow: "hidden",
  },
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: C.dark,
  },
  tableHeaderCell: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 6,
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: C.white,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: C.borderLight,
  },
  tableRowAlt: {
    backgroundColor: C.light,
  },
  tableCell: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 6,
    fontSize: 7.5,
    color: C.text,
    textAlign: "center",
    lineHeight: 1.4,
  },
  tableCellFirst: {
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    textAlign: "left",
  },

  /* ── Flow ── */
  flowWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
    flexWrap: "wrap",
  },
  flowNode: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: C.border,
    backgroundColor: C.light,
    marginBottom: 4,
  },
  flowNodeEnd: {
    backgroundColor: C.red,
    borderColor: C.red,
  },
  flowText: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    textAlign: "center",
  },
  flowTextWhite: {
    color: C.white,
  },
  flowArrow: {
    fontSize: 9,
    color: C.muted,
    marginHorizontal: 4,
    marginBottom: 4,
  },

  /* ── Footer ── */
  footer: {
    position: "absolute",
    bottom: 30,
    left: 50,
    right: 50,
    borderTopWidth: 0.5,
    borderTopColor: C.border,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 7,
    color: C.muted,
  },
});

/* ─── Helpers ─── */

/** Replace emoji stars/symbols that don't render in PDF fonts */
function cleanText(text: string): string {
  return text
    .replace(/\u2b50/g, "*")        // ⭐ → *
    .replace(/\u2b50\ufe0f/g, "*")  // ⭐️ → *
    .replace(/[\u{1F300}-\u{1F9FF}]/gu, "") // remove other emojis
    .replace(/\*{2,5}/g, (m) => {
      const count = m.length;
      return "\u2588".repeat(count) + "\u2591".repeat(5 - count);
    })
    .trim();
}

/* ─── Callout colors per variant ─── */
const calloutConfig: Record<string, { border: string; bg: string; labelColor: string; label: string }> = {
  tip:     { border: C.green,  bg: C.greenBg, labelColor: C.green,  label: "A retenir" },
  success: { border: C.green,  bg: C.greenBg, labelColor: C.green,  label: "A retenir" },
  warning: { border: C.amber,  bg: C.amberBg, labelColor: C.amber,  label: "Attention" },
  info:    { border: C.blue,   bg: C.blueBg,  labelColor: C.blue,   label: "Info" },
};

/* ─── Render functions ─── */

function RenderCallout({ el }: { el: Extract<RecapElement, { type: "callout" }> }) {
  const cfg = calloutConfig[el.variant] || calloutConfig.info;
  return (
    <View style={[s.callout, { borderLeftColor: cfg.border, backgroundColor: cfg.bg }]}>
      <Text style={[s.calloutLabel, { color: cfg.labelColor }]}>
        {el.title || cfg.label}
      </Text>
      <Text style={[s.calloutBody, { color: C.text }]}>
        {cleanText(el.text)}
      </Text>
    </View>
  );
}

function RenderBullets({ el }: { el: Extract<RecapElement, { type: "bullets" }> }) {
  return (
    <View style={s.bulletsWrap}>
      {el.title && <Text style={s.bulletsTitle}>{cleanText(el.title)}</Text>}
      {el.items.map((item, i) => {
        const colonIdx = item.indexOf(" : ");
        return (
          <View key={i} style={s.bulletRow}>
            <Text style={s.bulletDot}>{"\u2022"}</Text>
            {colonIdx > -1 ? (
              <Text style={s.bulletText}>
                <Text style={s.bold}>{cleanText(item.slice(0, colonIdx))}</Text>
                {" : "}
                {cleanText(item.slice(colonIdx + 3))}
              </Text>
            ) : (
              <Text style={s.bulletText}>{cleanText(item)}</Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

function RenderTable({ el }: { el: Extract<RecapElement, { type: "table" }> }) {
  return (
    <View style={s.tableWrap}>
      <View style={s.tableHeaderRow}>
        {el.headers.map((h, i) => (
          <Text key={i} style={s.tableHeaderCell}>
            {cleanText(h) || " "}
          </Text>
        ))}
      </View>
      {el.rows.map((row, ri) => (
        <View key={ri} style={[s.tableRow, ri % 2 === 1 ? s.tableRowAlt : {}]}>
          {row.map((cell, ci) => (
            <Text
              key={ci}
              style={[s.tableCell, ci === 0 ? s.tableCellFirst : {}]}
            >
              {cleanText(cell)}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

function RenderFlow({ el }: { el: Extract<RecapElement, { type: "flow" }> }) {
  return (
    <View style={s.flowWrap}>
      {el.nodes.map((node, i) => {
        const isEnd = i === 0 || i === el.nodes.length - 1;
        return (
          <React.Fragment key={i}>
            <View style={[s.flowNode, isEnd ? s.flowNodeEnd : {}]}>
              <Text style={[s.flowText, isEnd ? s.flowTextWhite : {}]}>
                {cleanText(node)}
              </Text>
            </View>
            {i < el.nodes.length - 1 && (
              <Text style={s.flowArrow}>{"\u2192"}</Text>
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}

function RenderElement({ el }: { el: RecapElement }) {
  switch (el.type) {
    case "heading":
      return el.level === 2 ? (
        <Text style={s.h2}>{cleanText(el.text)}</Text>
      ) : (
        <Text style={s.h3}>{cleanText(el.text)}</Text>
      );
    case "callout":
      return <RenderCallout el={el} />;
    case "bullets":
      return <RenderBullets el={el} />;
    case "table":
      return <RenderTable el={el} />;
    case "flow":
      return <RenderFlow el={el} />;
    default:
      return null;
  }
}

/* ─── Lesson Section ─── */
function LessonSection({ lesson }: { lesson: LessonRecap }) {
  if (lesson.elements.length === 0) return null;
  return (
    <View style={s.lessonSection}>
      <Text style={s.lessonTitle}>
        <Text style={s.lessonPrefix}>L{lesson.order} </Text>
        {cleanText(lesson.title)}
      </Text>
      <View style={s.lessonDivider} />
      {lesson.elements.map((el, i) => (
        <RenderElement key={i} el={el} />
      ))}
    </View>
  );
}

/* ─── Main Document ─── */
export function ModuleRecapPDF({ data }: { data: ModuleRecap }) {
  return (
    <Document
      title={`Module ${data.moduleOrder} - ${data.moduleTitle}`}
      author="OpexIA Academy"
    >
      <Page size="A4" style={s.page} wrap>
        {/* Cover */}
        <Text style={s.coverLabel}>MODULE {data.moduleOrder}</Text>
        <Text style={s.coverTitle}>{cleanText(data.moduleTitle)}</Text>
        <Text style={s.coverDesc}>{cleanText(data.moduleDescription)}</Text>
        <View style={s.coverLine} />

        {/* Lessons */}
        {data.lessons.map((lesson) => (
          <LessonSection key={lesson.order} lesson={lesson} />
        ))}

        {/* Footer */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>
            OpexIA Academy | Notes recapitulatives
          </Text>
          <Text
            style={s.footerText}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>
      </Page>
    </Document>
  );
}
