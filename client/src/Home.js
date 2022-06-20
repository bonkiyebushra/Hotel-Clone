function Home() {
  return (
    <div id="body" className="body">
      <div id="front_landing">
        <form id="reserve_form" method="POST" action="">
          {/* <!-- <input
            type="text"
            class="reserve_box"
            placeholder="Enter Destination"
            required
          /> --> */}
          <input
            type="text"
            class="reserve_box"
            placeholder="Check In"
            min="1997-01-01"
            max="2030-12-31"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            required
          />
          <input
            type="text"
            class="reserve_box"
            placeholder="Check Out"
            min="1997-01-01"
            max="2030-12-31"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            required
          />
          <input
            type="number"
            class="reserve_box"
            placeholder="Guest Count"
            min="1"
            required
          />
          <input
            type="number"
            class="reserve_box"
            placeholder="Room Count"
            min="1"
            required
          />
          <input type="submit" value="Book" id="reserve_submit" required />
        </form>
      </div>

      <div id="amenities_section">
        <h1>Amenities</h1>
        <div id="amenities">
          <div class="amenity">
            <img src={require("./images/wifi.jpg")} />
            <p>Enjoy unlimited high-speed wifi</p>
          </div>
          <div class="amenity">
            <img src={require("./images/jacuzzi.jpg")} />
            <p>Relax and relieve stress in our warm Jacuzzis</p>
          </div>
          <div class="amenity">
            <img src={require("./images/breakfast.jpg")} />
            <p>No need to go out for breakfast with our signature breakfast</p>
          </div>
          <div class="amenity">
            <img src={require("./images/pool.jpg")} />
            <p>Indoor and outdoor pools</p>
          </div>
          <div class="amenity">
            <img src={require("./images/fitness_center.jpg")} />
            <p>Workout in our state-of-the-art fitness center</p>
          </div>
        </div>
      </div>
      <div id="testimony_section">
        <div id="slider">
          <h1>What our guests say about their stay</h1>
          <div class="slide">
            <img src={require("./images/customer_service.jpg")} />
            <div class="slide_text">
              <h2>My idea of a 5-star experience</h2>
              <div id="star_rating">
                <span class="fa fa-star checked bo"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>

              <p>
                "Here is what I have to say about this amazing hotel. As soon as
                I walked in I was greeted with a beautiful smile from the front
                desk. The pace at which we were check in and directed to our
                rooms was just what I needed after a long day of business.Well
                done"
              </p>
              <p>Joe Schmoe on Jan 5, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;