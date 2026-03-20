import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import type {
  ModuleRecap,
  LessonRecap,
  RecapElement,
} from "./extractRecapContent";

/* ─── Colors ─── */
const C = {
  primary: "#4F46E5",   // Indigo (like the PDF example)
  primaryLight: "#EEF2FF",
  accent: "#FF1744",
  accentLight: "#FFF0F2",
  dark: "#111827",
  text: "#374151",
  muted: "#6B7280",
  light: "#F3F4F6",
  white: "#FFFFFF",
  green: "#059669",
  greenLight: "#ECFDF5",
  amber: "#D97706",
  amberLight: "#FFFBEB",
  border: "#E5E7EB",
  teal: "#0D9488",
  tealLight: "#F0FDFA",
};

/* ─── Styles ─── */
const s = StyleSheet.create({
  page: {
    paddingTop: 50,
    paddingBottom: 60,
    paddingHorizontal: 50,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: C.text,
    lineHeight: 1.5,
  },
  // Cover
  coverModuleLabel: {
    fontSize: 10,
    color: C.muted,
    letterSpacing: 1,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  coverTitle: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: C.primary,
    marginBottom: 6,
    lineHeight: 1.2,
  },
  coverSubtitle: {
    fontSize: 12,
    color: C.muted,
    marginBottom: 20,
  },
  coverLine: {
    height: 3,
    backgroundColor: C.primary,
    marginBottom: 30,
    borderRadius: 2,
  },
  // Lesson
  lessonHeader: {
    marginTop: 24,
    marginBottom: 10,
  },
  lessonLabel: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginBottom: 2,
  },
  lessonLabelPrefix: {
    color: C.primary,
    fontFamily: "Helvetica-Bold",
  },
  // Heading
  h2: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: C.primary,
    marginTop: 14,
    marginBottom: 6,
  },
  h3: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginTop: 10,
    marginBottom: 4,
  },
  // Callout
  calloutBox: {
    borderLeftWidth: 3,
    borderLeftColor: C.primary,
    backgroundColor: C.primaryLight,
    padding: 10,
    marginVertical: 8,
    borderRadius: 3,
  },
  calloutTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginBottom: 3,
  },
  calloutText: {
    fontSize: 9,
    color: C.text,
    lineHeight: 1.5,
  },
  // Bullets
  bulletContainer: {
    marginVertical: 6,
  },
  bulletTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: C.dark,
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3,
    paddingLeft: 4,
  },
  bulletDot: {
    width: 10,
    fontSize: 9,
    color: C.primary,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: C.text,
  },
  bulletTextBold: {
    fontFamily: "Helvetica-Bold",
  },
  // Table
  table: {
    marginVertical: 8,
    borderWidth: 0.5,
    borderColor: C.border,
    borderRadius: 3,
  },
  tableHeaderRow: {
    flexDirection: "row",
    backgroundColor: C.primary,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  tableHeaderCell: {
    flex: 1,
    padding: 6,
    fontSize: 8.5,
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
    backgroundColor: "#FAFAFA",
  },
  tableCell: {
    flex: 1,
    padding: 6,
    fontSize: 8.5,
    color: C.text,
    textAlign: "center",
  },
  // Flow
  flowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    flexWrap: "wrap",
    gap: 0,
  },
  flowNode: {
    backgroundColor: C.primaryLight,
    borderWidth: 0.5,
    borderColor: C.primary,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 4,
  },
  flowNodeFirst: {
    backgroundColor: C.primary,
  },
  flowNodeLast: {
    backgroundColor: C.primary,
  },
  flowNodeText: {
    fontSize: 8,
    color: C.dark,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  flowNodeTextWhite: {
    color: C.white,
  },
  flowArrow: {
    fontSize: 10,
    color: C.muted,
    marginHorizontal: 3,
    marginBottom: 4,
  },
  // Footer
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
    fontSize: 7.5,
    color: C.muted,
  },
});

/* ─── Callout variant styles ─── */
const calloutStyles: Record<string, { border: string; bg: string }> = {
  tip: { border: C.green, bg: C.greenLight },
  success: { border: C.green, bg: C.greenLight },
  warning: { border: C.amber, bg: C.amberLight },
  info: { border: C.primary, bg: C.primaryLight },
};

const calloutLabels: Record<string, string> = {
  tip: "A retenir",
  success: "A retenir",
  warning: "Attention",
  info: "Info",
};

/* ─── Element renderers ─── */

function RenderCallout({ el }: { el: Extract<RecapElement, { type: "callout" }> }) {
  const style = calloutStyles[el.variant] || calloutStyles.info;
  const label = el.title || calloutLabels[el.variant] || "Note";
  return (
    <View
      style={[
        s.calloutBox,
        { borderLeftColor: style.border, backgroundColor: style.bg },
      ]}
    >
      <Text style={s.calloutTitle}>{label}</Text>
      <Text style={s.calloutText}>{el.text}</Text>
    </View>
  );
}

function RenderBullets({ el }: { el: Extract<RecapElement, { type: "bullets" }> }) {
  return (
    <View style={s.bulletContainer}>
      {el.title && <Text style={s.bulletTitle}>{el.title}</Text>}
      {el.items.map((item, i) => {
        // Split on " : " to bold the term
        const colonIdx = item.indexOf(" : ");
        return (
          <View key={i} style={s.bulletRow}>
            <Text style={s.bulletDot}>{"\u2022"}</Text>
            {colonIdx > -1 ? (
              <Text style={s.bulletText}>
                <Text style={s.bulletTextBold}>
                  {item.slice(0, colonIdx)}
                </Text>
                {" : "}
                {item.slice(colonIdx + 3)}
              </Text>
            ) : (
              <Text style={s.bulletText}>{item}</Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

function RenderTable({ el }: { el: Extract<RecapElement, { type: "table" }> }) {
  return (
    <View style={s.table}>
      <View style={s.tableHeaderRow}>
        {el.headers.map((h, i) => (
          <Text key={i} style={s.tableHeaderCell}>
            {h}
          </Text>
        ))}
      </View>
      {el.rows.map((row, ri) => (
        <View
          key={ri}
          style={[s.tableRow, ri % 2 === 1 ? s.tableRowAlt : {}]}
        >
          {row.map((cell, ci) => (
            <Text key={ci} style={s.tableCell}>
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

function RenderFlow({ el }: { el: Extract<RecapElement, { type: "flow" }> }) {
  return (
    <View style={s.flowContainer}>
      {el.nodes.map((node, i) => (
        <React.Fragment key={i}>
          <View
            style={[
              s.flowNode,
              i === 0 ? s.flowNodeFirst : {},
              i === el.nodes.length - 1 ? s.flowNodeLast : {},
            ]}
          >
            <Text
              style={[
                s.flowNodeText,
                i === 0 || i === el.nodes.length - 1
                  ? s.flowNodeTextWhite
                  : {},
              ]}
            >
              {node}
            </Text>
          </View>
          {i < el.nodes.length - 1 && (
            <Text style={s.flowArrow}>{"\u2192"}</Text>
          )}
        </React.Fragment>
      ))}
    </View>
  );
}

function RenderElement({ el }: { el: RecapElement }) {
  switch (el.type) {
    case "heading":
      return el.level === 2 ? (
        <Text style={s.h2}>{el.text}</Text>
      ) : (
        <Text style={s.h3}>{el.text}</Text>
      );
    case "callout":
      return <RenderCallout el={el} />;
    case "bullets":
      return <RenderBullets el={el} />;
    case "table":
      return <RenderTable el={el} />;
    case "flow":
      return <RenderFlow el={el} />;
    case "text":
      return <Text style={{ fontSize: 9, color: C.text, marginVertical: 3 }}>{el.text}</Text>;
    default:
      return null;
  }
}

/* ─── Lesson Section ─── */
function LessonSection({ lesson }: { lesson: LessonRecap }) {
  if (lesson.elements.length === 0) return null;
  return (
    <View style={s.lessonHeader} wrap={false}>
      <Text style={s.lessonLabel}>
        <Text style={s.lessonLabelPrefix}>L{lesson.order} </Text>
        {lesson.title}
      </Text>
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
      <Page size="A4" style={s.page}>
        {/* Cover header */}
        <Text style={s.coverModuleLabel}>MODULE {data.moduleOrder}</Text>
        <Text style={s.coverTitle}>{data.moduleTitle}</Text>
        <Text style={s.coverSubtitle}>{data.moduleDescription}</Text>
        <View style={s.coverLine} />

        {/* Lessons */}
        {data.lessons.map((lesson) => (
          <LessonSection key={lesson.order} lesson={lesson} />
        ))}

        {/* Footer on every page */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>
            Formation OpexIA Academy | Notes recapitulatives
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
