import { Link } from "react-router-dom";

export const ArticleEntry = ({ linkTarget, header }: { linkTarget: string, header: string }) =>
    <article className="col col--6 margin-bottom--lg generatedIndexPage_vN6x">
        <Link to={linkTarget} className="card padding--lg cardContainer_fWXF">
            <h2 className="header-2">📄️ {header}</h2>
        </Link>
    </article>