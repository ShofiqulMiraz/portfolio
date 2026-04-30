import { profile } from "~/data/portfolio";

export function Footer() {
    return (
        <footer className="border-border border-t py-10">
            <div className="container-page flex flex-col items-start justify-between gap-3 text-sm text-text-muted sm:flex-row sm:items-center">
                <p>
                    © {new Date().getFullYear()} {profile.name}.
                </p>
                <p className="text-xs">Crafted in Barishal, BD.</p>
            </div>
        </footer>
    );
}
