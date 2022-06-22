import React from 'react';
const electron = window.require('electron');
const remote = electron.remote
const {BrowserWindow} = remote


const ResultPage = () => {

   return(
            <button onClick={()=>{
               let win = new BrowserWindow()
               win.loadURL('https://www.electronjs.org/docs/api/remote')
            }}>
            Open BrowserWindow
            </button>
  )

}
export default ResultPage;