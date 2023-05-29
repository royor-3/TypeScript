import ListItem from "./ListItem";

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    // we are intantiating the class here 
    // and we will always be able to refer to that as the instance of the class
    static instance: FullList = new FullList()

    // private constructor because there will only be one instance of this class created
    // and we will keep referring to that instance because we will only have one list in this app
    private constructor(
        private _list: ListItem[] = []
    ) {}

    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem('myList')
        // check if storedList is a string
        if (typeof storedList !== 'string') return

        const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
    }

    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._list))
    }

    clearList(): void {
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }
    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }

}