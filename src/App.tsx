import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { marked } from 'marked';



function App() {
  let defaultText =
    "# Learn to use Markdown Sintaxis\n## In the next link\n"+
    "**The actual [link](https://www.markdownguide.org/basic-syntax/)**" + 
    "\n\nCode `example`:\n" +
    "```\n  function handleText() {\n   let text = document.getElementById('editor') as HTMLTextAreaElement;\n   let preview = document.getElementById('preview') as HTMLDivElement;\n   preview.innerHTML = marked(text.value);}"+ 
    "\n ```" +
    "\n1. Item1\n1. Item2" +
    "\n > Block quote\n" +
    "\n![The San Juan Mountains are beautiful!](https://www.freecodecamp.org/news/content/images/2021/05/freecodecamp-org-gravatar.jpeg 'San Juan Mountains')"
  const [text, setText] = useState<string>(defaultText);
  useEffect(() => {
    handleText();

  }, [])

  function handleText() {
    let text = document.getElementById("editor") as HTMLTextAreaElement;
    setText(text.value);
  }

  return (
    <div className="App">
      <div className='mainWrapper'>
        <div className='editorWrapper'>
          <span className='editorHeader'>Markdown Editor</span>
          <textarea id="editor" onChange={handleText} defaultValue={text} ></textarea>
        </div>

        <div className='previewWrapper'>
          <span className="previewHeader">
            Previewer
          </span>
          <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
        </div>
      </div>
    </div>
  )
}

export default App
