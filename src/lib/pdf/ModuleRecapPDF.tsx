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

/* ─── OpexIA Brand — Monochrome + Red accent ─── */
const C = {
  red: "#FF1744",
  dark: "#0A0A0A",
  text: "#333333",
  muted: "#777777",
  light: "#F7F7F7",
  white: "#FFFFFF",
  border: "#E5E5E5",
};

const s = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 50,
    paddingHorizontal: 45,
    fontFamily: "Helvetica",
    fontSize: 8.5,
    color: C.text,
    lineHeight: 1.5,
    backgroundColor: C.white,
  },

  /* ── Header band ── */
  headerBand: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: C.red,
  },
  headerLeft: {},
  brandName: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    letterSpacing: 1,
  },
  brandAccent: {
    color: C.red,
  },
  headerRight: {
    alignItems: "flex-end",
  },
  moduleLabel: {
    fontSize: 7,
    color: C.muted,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  moduleNumber: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
  },

  /* ── Title section ── */
  titleSection: {
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginBottom: 4,
    lineHeight: 1.2,
  },
  description: {
    fontSize: 9,
    color: C.muted,
    marginBottom: 10,
  },

  /* ── Summary box ── */
  summaryBox: {
    flexDirection: "row",
    backgroundColor: C.light,
    borderRadius: 4,
    padding: 10,
    marginBottom: 14,
    gap: 0,
  },
  summaryItem: {
    flex: 1,
    alignItems: "center",
  },
  summaryValue: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
  },
  summaryLabel: {
    fontSize: 7,
    color: C.muted,
    marginTop: 2,
  },
  summaryDivider: {
    width: 0.5,
    backgroundColor: C.border,
    marginHorizontal: 6,
  },

  /* ── Section title ── */
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginTop: 10,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: C.border,
  },
  sectionAccent: {
    color: C.red,
  },

  /* ── Lesson row ── */
  lessonRow: {
    flexDirection: "row",
    marginBottom: 3,
    paddingLeft: 2,
  },
  lessonNumber: {
    width: 18,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: C.red,
  },
  lessonTitle: {
    flex: 1,
    fontSize: 8,
    color: C.dark,
  },

  /* ── Key points ── */
  keyPointsWrap: {
    marginTop: 8,
    marginBottom: 6,
  },
  keyPointRow: {
    flexDirection: "row",
    marginBottom: 2.5,
    paddingLeft: 4,
  },
  keyPointDot: {
    width: 10,
    fontSize: 7,
    color: C.red,
    marginTop: 1,
  },
  keyPointText: {
    flex: 1,
    fontSize: 8,
    color: C.text,
    lineHeight: 1.4,
  },
  keyPointBold: {
    fontFamily: "Helvetica-Bold",
  },

  /* ── Callout (condensed) ── */
  callout: {
    borderLeftWidth: 2,
    borderLeftColor: C.red,
    backgroundColor: C.light,
    padding: 8,
    marginVertical: 5,
    borderRadius: 2,
  },
  calloutLabel: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: C.red,
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  calloutText: {
    fontSize: 8,
    color: C.text,
    lineHeight: 1.4,
  },

  /* ── Table (compact) ── */
  tableWrap: {
    marginVertical: 5,
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
    paddingVertical: 4,
    paddingHorizontal: 5,
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: C.white,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderTopColor: C.border,
  },
  tableRowAlt: {
    backgroundColor: C.light,
  },
  tableCell: {
    flex: 1,
    paddingVertical: 3,
    paddingHorizontal: 5,
    fontSize: 7,
    color: C.text,
    textAlign: "center",
    lineHeight: 1.3,
  },
  tableCellFirst: {
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    textAlign: "left",
  },

  /* ── Flow (compact) ── */
  flowWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    flexWrap: "wrap",
  },
  flowNode: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 3,
    backgroundColor: C.light,
    borderWidth: 0.5,
    borderColor: C.border,
    marginBottom: 3,
  },
  flowNodeAccent: {
    backgroundColor: C.dark,
    borderColor: C.dark,
  },
  flowText: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
  },
  flowTextWhite: {
    color: C.white,
  },
  flowArrow: {
    fontSize: 8,
    color: C.muted,
    marginHorizontal: 3,
    marginBottom: 3,
  },

  /* ── Footer ── */
  footer: {
    position: "absolute",
    bottom: 22,
    left: 45,
    right: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: C.border,
    paddingTop: 6,
  },
  footerText: {
    fontSize: 6.5,
    color: C.muted,
  },
  footerBrand: {
    fontSize: 6.5,
    fontFamily: "Helvetica-Bold",
    color: C.muted,
  },
});

/* ─── Helpers ─── */

function cleanText(text: string): string {
  return text
    .replace(/\u2b50/g, "*")
    .replace(/\u2b50\ufe0f/g, "*")
    .replace(/[\u{1F300}-\u{1F9FF}]/gu, "")
    .replace(/\*{2,5}/g, (m) => {
      const count = m.length;
      return "\u2588".repeat(count) + "\u2591".repeat(5 - count);
    })
    .trim();
}

/* ─── Render elements (condensed for 2-page limit) ─── */

function RenderCallout({ el }: { el: Extract<RecapElement, { type: "callout" }> }) {
  const labels: Record<string, string> = {
    tip: "A retenir",
    success: "A retenir",
    warning: "Attention",
    info: "Info",
  };
  return (
    <View style={s.callout}>
      <Text style={s.calloutLabel}>{labels[el.variant] || "Note"}</Text>
      <Text style={s.calloutText}>{cleanText(el.text)}</Text>
    </View>
  );
}

function RenderBullets({ el }: { el: Extract<RecapElement, { type: "bullets" }> }) {
  // Limit to 5 bullets max for space
  const items = el.items.slice(0, 5);
  return (
    <View style={s.keyPointsWrap}>
      {items.map((item, i) => {
        const colonIdx = item.indexOf(" : ");
        return (
          <View key={i} style={s.keyPointRow}>
            <Text style={s.keyPointDot}>{"\u2022"}</Text>
            {colonIdx > -1 ? (
              <Text style={s.keyPointText}>
                <Text style={s.keyPointBold}>{cleanText(item.slice(0, colonIdx))}</Text>
                {" : "}
                {cleanText(item.slice(colonIdx + 3))}
              </Text>
            ) : (
              <Text style={s.keyPointText}>{cleanText(item)}</Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

function RenderTable({ el }: { el: Extract<RecapElement, { type: "table" }> }) {
  // Limit to 5 rows for space
  const rows = el.rows.slice(0, 5);
  return (
    <View style={s.tableWrap}>
      <View style={s.tableHeaderRow}>
        {el.headers.map((h, i) => (
          <Text key={i} style={s.tableHeaderCell}>{cleanText(h) || " "}</Text>
        ))}
      </View>
      {rows.map((row, ri) => (
        <View key={ri} style={[s.tableRow, ri % 2 === 1 ? s.tableRowAlt : {}]}>
          {row.map((cell, ci) => (
            <Text key={ci} style={[s.tableCell, ci === 0 ? s.tableCellFirst : {}]}>
              {cleanText(cell)}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

function RenderFlow({ el }: { el: Extract<RecapElement, { type: "flow" }> }) {
  // Limit to 5 nodes
  const nodes = el.nodes.slice(0, 5);
  return (
    <View style={s.flowWrap}>
      {nodes.map((node, i) => {
        const isEnd = i === 0 || i === nodes.length - 1;
        return (
          <React.Fragment key={i}>
            <View style={[s.flowNode, isEnd ? s.flowNodeAccent : {}]}>
              <Text style={[s.flowText, isEnd ? s.flowTextWhite : {}]}>
                {cleanText(node)}
              </Text>
            </View>
            {i < nodes.length - 1 && (
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
        <Text style={s.sectionTitle}>
          <Text style={s.sectionAccent}>— </Text>
          {cleanText(el.text)}
        </Text>
      ) : null; // Skip h3 to save space
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

/* ─── Condensed Lesson Section ─── */
function LessonElements({ lesson }: { lesson: LessonRecap }) {
  // Pick only the most important elements: max 2 per lesson
  const important = lesson.elements.filter(
    (el) => el.type === "callout" || el.type === "table" || el.type === "bullets" || el.type === "flow"
  );
  const toShow = important.slice(0, 2);
  return (
    <>
      {toShow.map((el, i) => (
        <RenderElement key={i} el={el} />
      ))}
    </>
  );
}

/* ─── Main Document — 2 pages max ─── */
export function ModuleRecapPDF({ data }: { data: ModuleRecap }) {
  // Estimate total lesson duration
  const totalLessons = data.lessons.length;

  // Collect all important elements across lessons (for page 2)
  const allElements: { lessonTitle: string; lessonOrder: number; el: RecapElement }[] = [];
  for (const lesson of data.lessons) {
    const important = lesson.elements.filter(
      (el) => el.type === "callout" || el.type === "table" || el.type === "bullets" || el.type === "flow"
    );
    // Max 1 key element per lesson for the recap
    if (important.length > 0) {
      allElements.push({ lessonTitle: lesson.title, lessonOrder: lesson.order, el: important[0] });
    }
  }

  // Split elements to fit 2 pages: page 1 = overview, page 2 = key takeaways
  const page2Elements = allElements.slice(0, 6); // Max 6 key elements

  return (
    <Document
      title={`Module ${data.moduleOrder} - ${data.moduleTitle}`}
      author="OpexIA Academy"
    >
      {/* ─── PAGE 1 — Overview ─── */}
      <Page size="A4" style={s.page}>
        {/* Header */}
        <View style={s.headerBand}>
          <View style={s.headerLeft}>
            <Text style={s.brandName}>
              Opex<Text style={s.brandAccent}>IA</Text> Academy
            </Text>
          </View>
          <View style={s.headerRight}>
            <Text style={s.moduleLabel}>Module</Text>
            <Text style={s.moduleNumber}>{String(data.moduleOrder).padStart(2, "0")}</Text>
          </View>
        </View>

        {/* Title */}
        <View style={s.titleSection}>
          <Text style={s.title}>{cleanText(data.moduleTitle)}</Text>
          <Text style={s.description}>{cleanText(data.moduleDescription)}</Text>
        </View>

        {/* Summary stats */}
        <View style={s.summaryBox}>
          <View style={s.summaryItem}>
            <Text style={s.summaryValue}>{totalLessons}</Text>
            <Text style={s.summaryLabel}>Lecons</Text>
          </View>
          <View style={s.summaryDivider} />
          <View style={s.summaryItem}>
            <Text style={s.summaryValue}>{totalLessons * 50}</Text>
            <Text style={s.summaryLabel}>XP disponibles</Text>
          </View>
          <View style={s.summaryDivider} />
          <View style={s.summaryItem}>
            <Text style={s.summaryValue}>{totalLessons}</Text>
            <Text style={s.summaryLabel}>Quiz</Text>
          </View>
        </View>

        {/* Lesson listing */}
        <Text style={s.sectionTitle}>
          <Text style={s.sectionAccent}>— </Text>
          Sommaire du module
        </Text>
        {data.lessons.map((lesson) => (
          <View key={lesson.order} style={s.lessonRow}>
            <Text style={s.lessonNumber}>L{lesson.order}</Text>
            <Text style={s.lessonTitle}>{cleanText(lesson.title)}</Text>
          </View>
        ))}

        {/* First batch of key content */}
        {page2Elements.slice(0, 3).map((item, i) => (
          <React.Fragment key={i}>
            <Text style={s.sectionTitle}>
              <Text style={s.sectionAccent}>L{item.lessonOrder} </Text>
              {cleanText(item.lessonTitle)}
            </Text>
            <RenderElement el={item.el} />
          </React.Fragment>
        ))}

        {/* Footer */}
        <View style={s.footer} fixed>
          <Text style={s.footerBrand}>
            Opex<Text style={{ color: C.red }}>IA</Text> Academy
          </Text>
          <Text style={s.footerText}>
            Recap Module {data.moduleOrder}
          </Text>
          <Text
            style={s.footerText}
            render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          />
        </View>
      </Page>

      {/* ─── PAGE 2 — Key Takeaways (only if there's content) ─── */}
      {page2Elements.length > 3 && (
        <Page size="A4" style={s.page}>
          {/* Header */}
          <View style={s.headerBand}>
            <View style={s.headerLeft}>
              <Text style={s.brandName}>
                Opex<Text style={s.brandAccent}>IA</Text> Academy
              </Text>
            </View>
            <View style={s.headerRight}>
              <Text style={s.moduleLabel}>Points cles</Text>
              <Text style={s.moduleNumber}>{String(data.moduleOrder).padStart(2, "0")}</Text>
            </View>
          </View>

          {page2Elements.slice(3).map((item, i) => (
            <React.Fragment key={i}>
              <Text style={s.sectionTitle}>
                <Text style={s.sectionAccent}>L{item.lessonOrder} </Text>
                {cleanText(item.lessonTitle)}
              </Text>
              <RenderElement el={item.el} />
            </React.Fragment>
          ))}

          {/* Checklist de fin */}
          <View style={[s.callout, { marginTop: 14, borderLeftColor: C.dark }]}>
            <Text style={[s.calloutLabel, { color: C.dark }]}>Checklist de fin de module</Text>
            {data.lessons.map((lesson) => (
              <View key={lesson.order} style={s.keyPointRow}>
                <Text style={[s.keyPointDot, { color: C.dark }]}>{"\u25A1"}</Text>
                <Text style={s.keyPointText}>
                  Lecon {lesson.order} terminee + quiz valide
                </Text>
              </View>
            ))}
          </View>

          {/* Footer */}
          <View style={s.footer} fixed>
            <Text style={s.footerBrand}>
              Opex<Text style={{ color: C.red }}>IA</Text> Academy
            </Text>
            <Text style={s.footerText}>
              Recap Module {data.moduleOrder}
            </Text>
            <Text
              style={s.footerText}
              render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
            />
          </View>
        </Page>
      )}
    </Document>
  );
}
