import styles from "./Editor.module.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "@ckeditor/ckeditor5-build-classic/build/translations/it";

function Editor() {
	return (
		<main className={styles.Editor}>
			<div style={{ height: "500px", width: "800px" }}>
				<CKEditor config={{ language: "it" }} editor={ClassicEditor} />
			</div>
		</main>
	);
}

export default Editor;
