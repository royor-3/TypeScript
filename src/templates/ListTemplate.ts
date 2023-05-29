import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear():void,
    render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList {


    ul: HTMLUListElement

    static instance: ListTemplate = new ListTemplate()

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear():void {
        this.ul.innerHTML = ""
    }

    render(fullList: FullList): void {
        this.clear()
        fullList.list.forEach(item => {
            // create li element
            const li = document.createElement('li') as HTMLLIElement
            li.className = "item"

            // create checkbox element
            const check = document.createElement('input') as HTMLInputElement
            check.type = 'checkbox'
            // using the getter
            check.id = item.id
            check.tabIndex = 0
            // using the getter
            check.checked = item.checked

            // add checkbox to li element
            li.append(check)

            // add listener on the checkbox
            check.addEventListener('change', () => {
                item.checked = !item.checked
                fullList.save()
            })

            // create the label element
            const label = document.createElement('label') as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent = item.item
            
            // add the label to li element
            li.append(label)

            // create delete button element
            const button = document.createElement('button') as HTMLButtonElement
            button.className = 'button'
            button.textContent = 'X'
            li.append(button)

            // add listener to delete button
            button.addEventListener('click', () => {
                fullList.removeItem(item.id)
                this.render(fullList)
            })

            this.ul.append(li)

        })
    }


}