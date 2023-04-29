import React from "react"
import { useState } from "react";
import "./BrowseVenues.css"
import { Link } from "react-router-dom";

export default function BrowseVenues() {
  return (
    <div className="browse-venues-1 clip-contents">
      <div className="group-577">
        <p className="browse-venues">Browse Venues</p>
        <p className="see-the-list-of-all-avail">
          See the list of all available and unavailable venues today
        </p>
        <div className="group-4">
          <div className="group-812">
            <div className="group-667">
              <div className="group-662">
                <div className="frame-5">
                  <p className="nlt-2">NLT 2</p>
                  <p className="_-5-hours">5 hours</p>
                </div>
                <div className="frame-6">
                  <p className="nlt-3">NLT 3</p>
                  <p className="_-7-hours">7 hours</p>
                </div>
              </div>
              <div className="group-844">
                <div className="frame-8">
                  <p className="nlt-5">NLT 5</p>
                  <p className="_-3-hours">3 hours</p>
                </div>
                <div className="frame-9">
                  <p className="nlt-6">NLT 6</p>
                  <p className="_-2-hours">2 hours</p>
                </div>
              </div>
              <div className="group-199">
                <div className="frame-10">
                  <p className="nlt-7">NLT 7</p>
                  <p className="_-1-hour">1 hour</p>
                </div>
                <div className="frame-11">
                  <p className="nlt-8">NLT 8</p>
                  <p className="_-3-hours-1">3 hours</p>
                </div>
                <div className="frame-12">
                  <p className="nlt-9">NLT 9</p>
                  <p className="_-3-hours-2">3 hours</p>
                </div>
              </div>
            </div>
            <div className="frame-7">
              <p className="nlt-4">NLT 4</p>
              <p className="_-8-hours">8 hours</p>
            </div>
            <div className="frame-4">
              <p className="nlt-1">NLT 1</p>
              <p className="_-2-hours-1">2 hours</p>
            </div>
            <div className="rectangle-18" />
          </div>
          <div className="group-5">
            <p className="nlt">NLT</p>
            <div className="group-3">
              <p className="_-6-hours-available">6 hours available</p>
            </div>
          </div>
        </div>
        <div className="group-51">
          <p className="swlt">SWLT</p>
          <div className="group-31">
            <p className="_-8-hours-available">8 hours available</p>
          </div>
        </div>
        <div className="group-6">
          <p className="calc">CALC</p>
          <div className="group-32">
            <p className="_-8-hours-available-1">8 hours available</p>
          </div>
        </div>
      </div>
      <div className="bottom-nav">

      <div className="dashboard-1">
        <Link to={"/dashboard"}>
            <a href="/dashboard">
                <button>
                <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ytci3y8gt3-109%3A276?alt=media&token=55581594-396f-4c59-95f7-6aada475b759"
            alt="Not Found"
            className="layout-grid"
        />
                </button>
              </a>
            </Link>
        </div>
        <div className="group-1059">
          <div className="group-1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ytci3y8gt3-109%3A270?alt=media&token=33995dab-55aa-4b3f-912a-c951e427c52a"
              alt="Not Found"
              className="newspaper"
            />
            <p className="browse">Browse</p>
          </div>
        </div>
        <div className="group-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/ytci3y8gt3-109%3A264?alt=media&token=2511df94-b65a-41c0-a5de-731243e8a483"
            alt="Not Found"
            className="user"
          />
          <p className="reps">Reps</p>
        </div>
      </div>
    </div>
  )
}
