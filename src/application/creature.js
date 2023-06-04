import { Link } from 'react-router-dom'
import {  PDFViewer ,PDFDownloadLink ,Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './PDF.css'
import {CreatePDF} from './CreatePDF'


export function Creature() {
    return (
        <div>
            <Link to='/creature' activeStyle></Link>
            <h1>Creature page</h1>
            <CreatePDF/>
        </div>

    )
}