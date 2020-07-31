import React, { Component } from 'react'
import '../Upload/UploadFile.css'

export default class UploadFile extends Component {
    render() {
        return (
            <div class="upload-container">
                <form action="/action_page.php">
                    <div class="row">
                        <div class="col-25">
                            <label for="country">Saree Type</label>
                        </div>
                        <div class="col-75">
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="country">Color</label>
                        </div>
                        <div class="col-75">
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Material</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Enter type of material.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Design</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Enter Design pattern.." />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="lname">Blouse</label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Enter Blouse model.." />
                        </div>
                    </div>
                    <div class="upload-submit">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}
