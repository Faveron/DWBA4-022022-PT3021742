class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            componentes: [
                { id: 1, disciplina: 'Sistemas Operacionais', carga: 66.7, periodo: 'Noturno' },
                { id: 2, disciplina: 'Inglês', carga: 33.3, periodo: 'Noturno' },
                { id: 3, disciplina: 'Laboratório de Estruturas de Dados e Programação', carga: 33.3, periodo: 'Noturno' },
                { id: 4, disciplina: 'Introdução a Banco de Dados', carga: 66.7, periodo: 'Noturno' }
            ]
        }
    }

    cabecalho() {
        let atributos = Object.keys(this.state.componentes[0]).splice(1, 3);
        return atributos.map((componente) => {
            return <th>{componente.toUpperCase()}</th>
        })
    }

    corpo() {
        return this.state.componentes.map((componente) => {
            return (
                <tr key={componente.id}>
                    <td>{componente.disciplina}</td>
                    <td>{componente.carga}</td>
                    <td>{componente.periodo}</td>
                </tr>
            )
        })
    }


    render() {
        return (
            <div>
                <h2 id='title'>Componentes curriculares</h2>
                <table id='componentes'>
                    <tbody>
                        <tr>{this.cabecalho()}</tr>
                        {this.corpo()}
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<Table />, document.getElementById('tabela'));