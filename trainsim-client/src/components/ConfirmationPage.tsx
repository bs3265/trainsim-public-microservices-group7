import React, { Component, ReactElement } from "react";
import Itinerary from "../models/Itinerary";
import ItinerarySearch from "../models/ItinerarySearch";
import PurchaseStage from "../models/PurchaseStage";
import InputField from "./InputField";
import NavButtonBar from "./NavButtonBar";
import ProgressTracker from "./PurchaseTracker";
import SearchHeader from "./SearchHeader";
import TravelerInfoPage from "./TravelerInfoPage";
import CheckoutPage from "./CheckoutPage";
import HomePage from "./HomePage";
import Traveler from "../models/Traveler"

export interface ConfirmationPageProps {
    search: ItinerarySearch;
    itinerary: Itinerary;
    payment: any;
    travelers: Traveler[];
    setPage: (page: ReactElement) => void;
}


interface ConfirmationPageState { }

export default class ConfirmationPage extends Component<ConfirmationPageProps, ConfirmationPageState> {
    constructor(props: ConfirmationPageProps) {
        super(props);
    }

    override render() {
        const { search, itinerary, setPage, payment, travelers } = this.props;
        console.log(this.props)
        console.log(travelers)
        const travelerNames = new Array<ReactElement>();
        for (let i = 0; i < search.travelers; i++) {
            let fullName = this.props.travelers[i].firstName + ' ' + this.props.travelers[i].lastName;
            travelerNames.push(<li>{fullName}</li>)
        }

        return <div>
            <SearchHeader search={search} />
            <ProgressTracker currentStage={PurchaseStage.Confirmation} />
            <hr />

            <div className="content">
                <h2 className="title is-3">Confirmation</h2>
                <p>Thank you for your purchase.</p>
                <h2 className="title is-4">Purchase Summary - Ticket Number {this.props.payment.id}</h2>
                <div className="columns">
                    <div className="column is-10">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Depart</td>
                                    <td>{this.props.payment.depart}</td>
                                </tr>
                                <tr>
                                    <td>Arrive</td>
                                    <td>{this.props.payment.arrive}</td>
                                </tr>
                                <tr>
                                    <td>Purchase Date</td>
                                    <td>{this.props.payment.creationDate}</td>
                                </tr>
                                <tr>
                                    <td>Number of Passengers</td>
                                    <td>{this.props.search.travelers}</td>
                                </tr>
                                <tr>
                                    <td>Passengers</td>
                                    <td>{travelerNames}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <NavButtonBar
                onBack={() => console.log("back")}
                onNext={() => window.location.reload(false)} />
            </div>

    }

}
