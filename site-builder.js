class siteBuilder {
    constructor (runtime) {
        this.runtime = runtime
        this.siteHtml = ""
        this.siteWindow;
    }
    getInfo() {
      return {
        id: 'sitebuilder',
        name: 'Site Builder',
        //colors
        color1: '#7e69be',
        color2: '#3a286f',
        docsURI: 'https://github.com/minidogg/my-penguinmod-extensions/blob/88ff87b8fff13b4e601415d94b201f12c6d475fc/site%20builder/docs/home.md',
        blocks: [
          {
            opcode: 'site',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Site HTML'
          },
          {
            opcode: 'setHtml',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set Site HTML [html]',
            arguments:{
                html: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue:"<h1>Hello</h1>"
                },
            }
          },
          {
            opcode: 'addHtml',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Add to Site HTML[html]',
            arguments:{
                html: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue:"<p>World</p>"
                },
            }
          },
        {
            opcode: 'resetHtml',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Reset Site HTML',
          },
          {
            opcode: 'openSiteWindow',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Open Site Window',
          },
        //   {
        //     opcode: 'closeSiteWindow',
        //     blockType: Scratch.BlockType.COMMAND,
        //     text: 'Close Site Window',
        //   },
        //   {
        //     opcode: 'updateSiteWindow',
        //     blockType: Scratch.BlockType.COMMAND,
        //     text: 'Update Site Window',
        //   },
          {
            opcode: 'addHeader',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Add Header Element Text: [TEXT] Size: [SIZE] ID: [ID] Class: [CLASS]',
            arguments:{
                TEXT: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Apple'
                  },
                  SIZE: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'headers'
                  },
                  ID: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ""
                  },
                  CLASS: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ""
                  }
            }
          },
          {
            opcode: 'addPara',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Add Paragraph Element Text: [TEXT] ID: [ID] Class: [CLASS]',
            arguments:{
                TEXT: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Apple'
                  },
                  ID: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ""
                  },
                  CLASS: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ""
                  }
            }
          },
          {
            opcode: 'addImg',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Add Image Element URL: [TEXT] ID: [ID] Class: [CLASS]',
            arguments:{
                TEXT: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'https://extensions.turbowarp.org/dango.png'
                  },
                  ID: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ""
                  },
                  CLASS: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ""
                  }
            }
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Styles"
        },
          {
            opcode: 'addColorStyle',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Add color style with color [value] to all elements with [type] selector named [name]',
            arguments:{
                value: {
                    type: Scratch.ArgumentType.COLOR,
                    defaultValue: "#ff0000"
                },
                type: {
                    type: Scratch.ArgumentType.STRING,
                    menu: "selectors"
                },
                name: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ""
                },
            }
          },
          {
            opcode: 'addTextColorStyle',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Add text color style with color [value] to all elements with [type] selector named [name]',
            arguments:{
                value: {
                    type: Scratch.ArgumentType.color,
                    defaultValue: "#002EFF"
                },
                type: {
                    type: Scratch.ArgumentType.STRING,
                    menu:"selectors"
                },
                name: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: ""
                },
            }
          },
          {
            opcode: 'addPositionStyle',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Add CSS [CSS]',
            arguments:{
                CSS: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: "body {text-align: center;}"
                }
            }
          },

        ],
        menus: {
            headers: {
              acceptReporters: true,
              items: ["big","medium","small","tiny"]
            },
            styles: {
                acceptReporters: true,
                items: ["big","medium","small","tiny"]
            },
            selectors: {
                acceptReporters: true,
                items: ["id","class"]
            },
            dir: {
              acceptReporters: true,
              items: ["top","bottom","left","right"]
            },
            numType: {
              acceptReporters: true,
              items: ["px","%"]
            },
            posType: {
              acceptReporters: true,
              items: ["absolute","fixed","sticky"]
            },
          }
      };
    }
    temp(){
      return;
    }
    site() {
      return this.siteHtml;
    }
    setHtml(args) {
        this.siteHtml = args.html
    }
    addHtml(args) {
        this.siteHtml += args.html
    }
    resetHtml(args) {
        this.siteHtml = ""
    }
    openSiteWindow(){
        this.siteWindow = window.open("", "", "width=1000,height=1000")
        this.siteWindow.document.write(this.siteHtml)
    }
    closeSiteWindow(){
        this.siteWindow.close()
    }
    updateSiteWindow(){
        this.siteWindow.document.body.innerHTML = ""
        this.siteWindow.document.write(this.siteHtml)
    }
    addHeader(args){
        var items = {"big":"h1","medium":"h2","small":"h3","tiny":"h4"}
        this.siteHtml += `<${items[args.SIZE]} id="${args.ID}" class="${args.CLASS}">${args.TEXT}</${items[args.SIZE]}>`
    }
    addPara(args){
        this.siteHtml += `<p id="${args.ID}" class="${args.CLASS}">${args.TEXT}</p>`
    }
    addColorStyle(args){
        var items = {"id":"#","class":"."}
        this.siteHtml += `<style>${items[args.type]}${args.name}{background-color:${args.value}}</style>`
    }
    addTextColorStyle(args){
        var items = {"id":"#","class":"."}
        this.siteHtml += `<style>${items[args.type]}${args.name}{color:${args.value}}</style>`
    }
    addPositionStyle(args){
      var items = {"id":"#","class":"."}
      this.siteHtml += `<style>${args.CSS}}</style>`
  }
    setInnerHtml(args){
        if(args.type = "id"){
            this.siteWindow.document.getElementById(args.name).innerHTML = args.text

            return;
        }
        for(let el of this.siteWindow.document.getElementsByClassName(args.name)){
            el.innerHTML = args.text
        }
    }
  }
  
  Scratch.extensions.register(new siteBuilder());
