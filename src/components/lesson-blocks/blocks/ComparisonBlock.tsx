"use client";

import type { ComparisonBlock as ComparisonBlockType } from "@/types/lesson-blocks";

export default function ComparisonBlock({ block }: { block: ComparisonBlockType }) {
  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden my-8">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {/* Header */}
          <thead>
            <tr>
              {block.headers.map((header, i) => (
                <th
                  key={i}
                  className="bg-[#F8F9FA] px-5 py-3 text-left font-semibold text-[#111] border-b border-gray-200 whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {/* Rows */}
          <tbody>
            {block.rows.map((row, ri) => (
              <tr
                key={ri}
                className={ri % 2 === 1 ? "bg-[#FAFBFC]" : "bg-white"}
              >
                {row.cells.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-5 py-3 border-b border-gray-100 ${
                      ci === 0
                        ? "font-medium text-[#111]"
                        : "text-[#6B7280]"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
