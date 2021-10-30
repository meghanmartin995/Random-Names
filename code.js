figma.showUI(__html__, { visible: false })

figma.ui.onmessage = (message) => {

  async function replaceText() {
    if (figma.currentPage.selection.length !==1 ) {
      figma.closePlugin("Select one line of text")
        return
    }

    await figma.loadFontAsync(figma.currentPage.selection[0].fontName)

    // const newNames =  ["Rosa Antón",  "Abeba Crystal", "Nada Ambre", "Karolina Nahia", "Leo Mack", "Tayler Peters", "Loki Johnson"]
    // const randomName = newNames[Math.floor(Math.random() * newNames.length)];

    figma.currentPage.selection[0].characters = message
    figma.currentPage.selection[0].name = message


    figma.closePlugin("Name replaced!")

  }

  replaceText()

}



