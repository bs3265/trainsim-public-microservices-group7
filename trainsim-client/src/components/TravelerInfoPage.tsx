import React, { Component, ReactElement } from "react";
import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import PurchaseStage from "../models/PurchaseStage";
import CheckoutPage from "./CheckoutPage";
import NavButtonBar from "./NavButtonBar";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import Traveler from "../models/Traveler"
import InputField from "./InputField"

export interface TravelerInfoPageProps {
    search: ItinerarySearch;
    search_return: ItinerarySearch;
    itinerary: Itinerary;
    itinerary_return: Itinerary;
    roundTrip : Boolean;
    setPage: (page: ReactElement) => void;
}

interface TravelerInfoPageState {  
    travelers:Traveler[]
}

export default class TravelerInfoPage extends Component<TravelerInfoPageProps, TravelerInfoPageState> {
    constructor(props: TravelerInfoPageProps) {
        super(props);
        const infos = new Array<Traveler>();
        for (let i = 0; i < props.search.travelers; i++) {
            infos.push(new Traveler("", "", "",""))
        }
        this.state = {travelers: infos}
    }

    override render() {
        const { search, itinerary, setPage } = this.props;
        const travelerBlocks = new Array<ReactElement>();

        console.log(this.state);
        for (let i = 1; i <= search.travelers; i++) {
            travelerBlocks.push(<div key={i} className="block pt-5">
                <h3 className="title is-5">Traveler {i}</h3>
                <div>
                    <div className="columns">
                        <div className="column">
                            <InputField
                                label="First Name"
                                htmlName="first-name"
                                htmlType="text"
                                icon="fas fa-user"
                                required={true}
                                value={this.state.travelers[i-1].firstName}
                                setValue={v => {
                                    let updateTraveler = [...this.state.travelers]
                                    updateTraveler[i-1].firstName = v
                                    this.setState({travelers:updateTraveler})
                                }}
                            />
                        </div>
                        <div className="column">
                            <InputField
                                label="Last Name"
                                htmlName="last-name"
                                htmlType="text"
                                icon="fas fa-user"
                                required={true}
                                value={this.state.travelers[i-1].lastName}
                                setValue={v => {
                                    let updateTraveler = [...this.state.travelers]
                                    updateTraveler[i-1].lastName = v
                                    this.setState({travelers:updateTraveler})
                                }}
                            />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <InputField
                                label="Email"
                                htmlName="email"
                                htmlType="email"
                                icon="fas fa-at"
                                required={true}
                                value={this.state.travelers[i-1].email}
                                setValue={v => {
                                    let updateTraveler = [...this.state.travelers]
                                    updateTraveler[i-1].email = v
                                    this.setState({travelers:updateTraveler})
                                }}
                            />
                        </div>
                        <div className="column">
                            <InputField
                                label="Phone"
                                htmlName="last-name"
                                htmlType="tel"
                                icon="fas fa-phone"
                                required={true}
                                value={this.state.travelers[i-1].phone}
                                setValue={v => {
                                    let updateTraveler = [...this.state.travelers]
                                    updateTraveler[i-1].phone = v
                                    this.setState({travelers:updateTraveler})
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>);
        }

        return <div>
            <SearchHeader search={search} />
            <ProgressTracker currentStage={PurchaseStage.EnterTravelerInfo} />

            <hr />

            <div className="content">
                <h2 className="title is-3">Traveler Details</h2>
                <p>Please give us some information on who will be traveling.</p>
                <div>{travelerBlocks}</div>
            </div>
            <NavButtonBar
                onBack={() => console.log("Back")}
                onNext={() => setPage(<CheckoutPage search={search} itinerary={itinerary} setPage={setPage} travelers={this.state.travelers}/>)}
            />
        </div>
    }
}