import Preview from "./component/Preview";
import Textarea from "./component/Textarea";
import {useState} from "react";
import marked from 'marked';

function App() {

  const [text, setText] = useState(`
Markdown is a way to style text on the web.  
It use non alphabetic characters like # and * to add style to your text.  
If you want to add some header, you can add a # next to your title.  
# This is a h1 title
## This is a h2 title
### This is a h3 title  
An other way to give impact to you text is to making it **bold** or *italic*  

If you want, you can add a [link](https://images.unsplash.com/photo-1603226301024-e8461eb82e35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80) by putting word inside square bracket and the url next to it between round bracket.

You can also add an image which is like a link, except that the word between brackets is the alternative text  
and you need to add an exclamation mark on the left   
![Hello](https://cdn.iconscout.com/icon/premium/png-256-thumb/hello-1-336715.png)

If you need to make a list, you can make  
an unordered list  

 * Item 1  
 * Item 2  
 * Item 3  

an ordered list
 1. Item 1  
 2. Item 2  
 3. Item 3

> If you like quote, you can make a blockquote like this one.  
   
\
  If you like code, you can make

\`<p> an inline code like this </p>\`

If you need more line, no problem 
\`\`\` 
<h3>This is also</h3>
<p>a codeblock</p>
var bloque = 'awesome'
\`\`\`    
For more info, you can check
\
\
\
github guide following this [link](https://guides.github.com/features/mastering-markdown/)
  `
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
      
      <div className="container">
        <h1 className="title" >Markdown previewer</h1>
        <Textarea input={handleInput} initialText={text}/>
        <Preview preview={handlePreview()}/>
        <h2 className="copyright">Made by <a href="https://github.com/AnthoVDO">AnthoVDO</a></h2>
      </div>
    </div>
  );
}

export default App;
