import Preview from "./component/Preview";
import Textarea from "./component/Textarea";
import {useState} from "react";
import marked from 'marked';

function App() {

  const [text, setText] = useState('Markdown is a way to style text on the web.  It use non alphabetic characters like # and * to add style to your text.  If you want to add some header, you can add a # next to your title.  \   # This is a h1 title  ## This is a h2 title  ### This is a h3 title  \  If you want to add a [link](https://images.unsplash.com/photo-1603226301024-e8461eb82e35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80) \
  You can also add an image which is like a link except that the work between brackets is the alternative text  [Hello](https://www.vhv.rs/dpng/d/408-4085499_hello-and-welcome-hello-we-are-back-hd.png)  \  If you need to make a list, you can make  an unordered list  * Item 1  * Item 2  * Item 3  an ordered list  1. Item 1  1. Item 2  1. Item 3  \  > If you like quote, you can make a blockquote like this one  \  If you like code, you can make  `<p> an inline code like this </p>`  If you need more line, no problem  ```  <h3>This is also</3>  <p>a codeblock</p>  var bloque = "awesome" ```  For more info, you can check  \  \  \  github guide following this [link](https://guides.github.com/features/mastering-markdown/)'
  )

const handleInput = (e) => {
setText(e.target.value);
}

const handlePreview = () => {
let textMarked = marked(text, {sanitize: true});
return {__html: textMarked}
}






  return (
    <div className="App">
      <h1>Markdown previewer</h1>
      <div className="container">
        <Textarea input={handleInput} initialText={text}/>
        <Preview preview={handlePreview()}/>
      </div>
    </div>
  );
}

export default App;
