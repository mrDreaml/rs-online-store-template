import Header from './Header'
import Main from './Main'

class App {
    state={}
    constructor() {
    }

    onSelectFilter(filterValue) {
        this.state = { ...this.state, filter: filterValue }
        this.render()
    }

    render() {
        // инициализация дочерних компонентов, передаем нужное props
        const childs = [
            new Header({ onSelectFilter: this.onSelectFilter }),
            new Main({ filter: this.state.filter }),
        ]

        for (const child of childs) {
            child.render()
        }
    }
}

export default App