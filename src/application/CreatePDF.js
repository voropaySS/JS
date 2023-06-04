import React,{useState} from 'react';
import {  PDFViewer ,PDFDownloadLink ,Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './PDF.css'

export function Preview  ()  {
    const [value, setValue] = useState(false)
    const handleChange = (value) => {
        setValue(value)
    }
    if(value)
    {
        return (
            <div style={{flexGrow: 1}}>
                <PDFViewer
                    showToolbar={false}
                    style={{
                        width: '100%',
                        height: '95%',
                    }}
                >
                    <CreatePDF onChange={handleChange}/>
                </PDFViewer>
                <PDFDownloadLink
                    document={<CreatePDF onChange={handleChange}/>}
                    fileName='some name.pdf'
                >
                    {({loading}) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>
            </div>
        )
    }
    else {
        return (<div></div>);
    }
}


export const CreatePDF = ({ onChange },{profile} ) => {
    const [name, setName] = React.useState("");
    const [corp, setCorp] = React.useState("");
    const [date, setDate] = React.useState("");
    const [type_request, setTypeRequest] = React.useState("");
    const [type_template, setTypeTemplate] = React.useState("");
    const [numberDoc, setNumberDoc] = React.useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeCorp = (e) => {
        setCorp(e.target.value);
    }
    const onChangeDate = (e) => {
        setDate(e.target.value);
    }
    const onChangeTypeRequest = (e) => {
        setTypeRequest(e.target.value);
    }
    const onChangeTypeTemplate = (e) => {
        setTypeTemplate(e.target.value);
    }

    const [boolCheckTest,setBoolCheckTest]=useState(false)
    const handlerClickSender=(e)=> {
        setBoolCheckTest(true)
        onChange(boolCheckTest)
    }

    return (
        <div className='MainCLassPDF'>
            <div className="container">
                <ul className='input_form'>
                    <li>
                        <label>Название</label>
                        <input
                        type="text"
                        name="name"
                        onChange={onChangeName}
                        value={name}
                        />
                    </li>
                    <li>
                        <label>Тип заявки</label>
                        <select name="name" className='listbox' size="1"
                            onClick={onChangeTypeRequest}>
                            <option value="Тип какой то 1">Тип какой то 1</option>
                            <option value="Тип какой то 2">Тип какой то 2</option>
                            <option value="Тип какой то 3">Тип какой то 3</option>>
                        </select>
                    </li>
                    <li>
                        <label>Тип шаблона</label>
                        <select name="name" className='listbox' size="1"
                        onClick={onChangeTypeTemplate}>
                        <option value="Тип шаблона какой то 1">Тип шаблона какой то 1</option>
                        <option value="Тип шаблона какой то 2">Тип шаблона какой то 2</option>
                        <option value="Тип шаблона какой то 3">Тип шаблона какой то 3</option>>
                        </select>
                    </li>
                    <li>
                        <label>Дата согласования</label>
                        <input
                            type="date"
                            name="name"
                            onChange={onChangeDate}
                            value={date}
                        />
                    </li>
                    <li>
                        <label>Организация</label>
                        <input
                            type="text"
                            name="name"
                            onChange={onChangeCorp}
                            value={corp}
                        />
                    </li>
                    <li>
                        <button onClick={handlerClickSender}>Отправить</button>
                    </li>
                </ul>
            </div>
            <div className='pdfWindow'>
                <Document class='PDF'>
                    <Page size="A4">
                        <View>
                            <Text>Название : {name}</Text>
                        </View>
                        <br/>
                        <View>
                            <Text>Тип заявки : {type_request}</Text>
                        </View>
                        <br/>
                        <View>
                            <Text>Тип шаблона : {type_template}</Text>
                        </View>
                        <br/>
                        <View>
                            <Text>Дата согласования : {date}</Text>
                        </View>
                        <br/>
                        <View>
                            <Text>Номер документа № {numberDoc}</Text>
                        </View>
                        <br/>
                        <View>
                            <Text>Организация : {corp}</Text>
                        </View>
                        <br/>
                    </Page>
                </Document>
            </div>;
        </div>
    )
}