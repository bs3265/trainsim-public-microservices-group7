import React, { Component, ReactElement } from "react";
import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import PurchaseStage from "../models/PurchaseStage";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import SearchResultItem from "./SearchResultItem";
import TravelerInfoPage from "./TravelerInfoPage";
import SearchResultRoundTripReturn from "./SearchResultPageRoundTripReturn";

interface SearchResultPageProps {
    search: ItinerarySearch;
    itineraries: readonly Itinerary[];
    search_return: ItinerarySearch;
    itineraries_return: readonly Itinerary[];
    setPage: (page: ReactElement) => void;
}

export default class SearchResultPageRoundTrip extends Component<SearchResultPageProps> {
    constructor(props: SearchResultPageProps) {
        super(props);
    }

    override render() {
        const { search, search_return, itineraries, itineraries_return, setPage } = this.props;

        const message = itineraries.length !== 0 ?
            "Please select one of the following itineraries for you departure." :
            "No results found.";

        return <div>
            <SearchHeader search={search} />
            <ProgressTracker currentStage={PurchaseStage.SelectItinerary} />

            <hr />

            <div className="content">
                <h2 className="title is-3">Starting Round Trip Itineraries</h2>
                <p>{message}</p>

                {itineraries.map(i =>
                    <SearchResultItem
                        key={i.id}
                        itinerary={i}
                        //select={() => setPage(<TravelerInfoPage search={search} itinerary={i} setPage={setPage} />)}
                        select={() => setPage(<SearchResultRoundTripReturn search_depart={search} itinerary_depart={i} search={search_return} itineraries={itineraries_return}  setPage={setPage} />)}
                    />
                )}

            </div>
        </div>
    }
}