const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parse(input: string): {
    year: number;
    month: number;
    hasMonth: boolean;
} {
    const [y, m] = input.split("-");
    const year = Number(y);
    if (m) return { year, month: Number(m) - 1, hasMonth: true };
    return { year, month: 0, hasMonth: false };
}

export function formatPoint(input: string): string {
    const { year, month, hasMonth } = parse(input);
    return hasMonth ? `${MONTHS[month]} ${year}` : `${year}`;
}

export function formatPeriod(start: string, end: string | null): string {
    const left = formatPoint(start);
    const right = end ? formatPoint(end) : "Present";
    return `${left} — ${right}`;
}

/** Returns a duration like "2 Years 4 Months", "11 Months", or "1 Year". */
export function formatDuration(start: string, end: string | null, now = new Date()): string {
    const s = parse(start);
    const e = end ? parse(end) : { year: now.getFullYear(), month: now.getMonth(), hasMonth: true };

    let months = (e.year - s.year) * 12 + (e.month - s.month);
    // Inclusive of the end month — feels natural for tenure ("Jan→Jan" reads as 1 month).
    months += 1;
    if (months < 1) months = 1;

    const years = Math.floor(months / 12);
    const rem = months % 12;

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} ${years === 1 ? "Year" : "Years"}`);
    if (rem > 0) parts.push(`${rem} ${rem === 1 ? "Month" : "Months"}`);
    return parts.join(" ");
}
