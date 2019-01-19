import React from "react";
import {PageHeader} from "react-bootstrap";
import Poll from "../../Components/Poll/Poll";


class Polls extends React.Component<() => {},()=>{}> {

    vote(answer: 'YES' | 'NO') {
        alert(answer);
    }

    render() {
        return(
            <div>
                <PageHeader>
                    Verfügbare Abstimmungen
                </PageHeader>

                {this.getPolls()}
            </div>
        );
    }

    getPolls() {
        var polls = [<Poll title={'Hornkuh Initiative'} description={'Hörner beinhalten zwar ein Verletzungsrisiko. Doch mit richtiger Stallplanung und gutem Tierbezug kann es minimiert werden. Ganz wichtig: Die Tierhalterinnen und Tierhalter entscheiden weiterhin selbst, ob sie Tiere mit oder ohne Hörner halten. \n' +
        '\n' +
        'Verankerung in Bundesverfassung\n' +
        'Seit 9 Jahren stösst das Anliegen überall auf Sympathie, löste aber weder bei der Bundesverwaltung noch dem Parlament eine Konkretisierung auf Gesetzesebene aus. Darum entstand die Volksinitiative. Sie kommt mit einer kurzen, klaren Ergänzung eines bereits vorhandenen Verfassungsartikels aus. Ein Gegenvorschlag, der eine Abstimmung unnötig gemacht hätte, wurde von der zuständigen Ständeratskommission abgelehnt.'} due={'09.09.2018'} vote={(answer: 'YES' | 'NO') => this.vote(answer)}/>
            ,
            <Poll title={'Hasen Initiative'} description={'Hörner beinhalten zwar ein Verletzungsrisiko. Doch mit richtiger Stallplanung und gutem Tierbezug kann es minimiert werden. Ganz wichtig: Die Tierhalterinnen und Tierhalter entscheiden weiterhin selbst, ob sie Tiere mit oder ohne Hörner halten. \n' +
            '\n' +
            'Verankerung in Bundesverfassung\n' +
            'Seit 9 Jahren stösst das Anliegen überall auf Sympathie, löste aber weder bei der Bundesverwaltung noch dem Parlament eine Konkretisierung auf Gesetzesebene aus. Darum entstand die Volksinitiative. Sie kommt mit einer kurzen, klaren Ergänzung eines bereits vorhandenen Verfassungsartikels aus. Ein Gegenvorschlag, der eine Abstimmung unnötig gemacht hätte, wurde von der zuständigen Ständeratskommission abgelehnt.'} due={'12.03.2019'} vote={(answer: 'YES' | 'NO') => this.vote(answer)}/>
            ,
            <Poll title={'Hörbuch Initiative'} description={'Hörner beinhalten zwar ein Verletzungsrisiko. Doch mit richtiger Stallplanung und gutem Tierbezug kann es minimiert werden. Ganz wichtig: Die Tierhalterinnen und Tierhalter entscheiden weiterhin selbst, ob sie Tiere mit oder ohne Hörner halten. \n' +
            '\n' +
            'Verankerung in Bundesverfassung\n' +
            'Seit 9 Jahren stösst das Anliegen überall auf Sympathie, löste aber weder bei der Bundesverwaltung noch dem Parlament eine Konkretisierung auf Gesetzesebene aus. Darum entstand die Volksinitiative. Sie kommt mit einer kurzen, klaren Ergänzung eines bereits vorhandenen Verfassungsartikels aus. Ein Gegenvorschlag, der eine Abstimmung unnötig gemacht hätte, wurde von der zuständigen Ständeratskommission abgelehnt.'} due={'18.02.2019'} vote={(answer: 'YES' | 'NO') => this.vote(answer)}/>
        ]
        return polls;
    }

}
export default Polls;