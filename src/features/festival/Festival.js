import React, { Component } from 'react';
import FestivalHeader from 'features/festival/FestivalHeader'
import FestivalDay from 'features/festival/FestivalDay';
import FestivalInfo from 'features/festival/FestivalInfo';
import { getArtistsByShowDate } from 'api/artists';

export class Festival extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artistsDay1: [],
            artistsDay2: [],
            artistsDay3: [],
            headerDay1: 'Festival Day 1',
            headerDay2: 'Festival Day 2',
            headerDay3: 'Festival Day 3',
        };
    }

    componentDidMount() {
        const artistsDay1 = getArtistsByShowDate('04-13-2018');
        const artistsDay2 = getArtistsByShowDate('04-14-2018');
        const artistsDay3 = getArtistsByShowDate('04-15-2018');
        this.setState({ artistsDay1, artistsDay2, artistsDay3 });
    }

    render() {
        const { artistsDay1, artistsDay2, artistsDay3, headerDay1, headerDay2, headerDay3 } = this.state;

        return (
            <main>
                <br />
                <br />
                <div className="max-width">
                    <FestivalHeader />
                    <br />
                    <br />
                    <FestivalDay headerText={headerDay1} artists={artistsDay1} />
                    <br />
                    <br />
                    <FestivalDay headerText={headerDay2} artists={artistsDay2} />
                    <br />
                    <br />
                    <FestivalDay headerText={headerDay3} artists={artistsDay3} />
                </div>
                <FestivalInfo />
            </main>
        );
    }
}

export default Festival;