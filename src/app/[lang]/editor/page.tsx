import React from 'react'
import { styles } from './resource'
import MdEditor from './components/MdEditor'
import MdViewer from './components/MdViewer'
import QuillEditor from './components/QuillEditor'

export default function page() {
    return (
        <section>
            <div className={styles.divider} />
            <div className={styles.title}>Editor</div>
            <QuillEditor />
            <div className={styles.divider} />
            <div className={styles.title}>Viewer</div>
            {/* <MdViewer /> */}
        </section>
    )
}
