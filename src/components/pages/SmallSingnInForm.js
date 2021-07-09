import React from 'react'

const SmallSingnInForm = () => {
    const formSubmmithandler = () => {
        alert('thanks fofr submitting the form.');
    }
    return (
        <div class="container" >
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card">
                        <header class="card-header">
                            <h4 class="card-title mt-2">Sign up</h4>
                        </header>
                        <article class="card-body">
                            <form>
                                <div class="form-row">
                                    <div class="col form-group">
                                        <label>First name </label>
                                        <input type="text" class="form-control" placeholder="" />
                                    </div>
                                    <div class="col form-group">
                                        <label>Last name</label>
                                        <input type="text" class="form-control" placeholder=" " />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Email address</label>
                                    <input type="email" class="form-control" placeholder="" />
                                    <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" value="option1" />
                                        <span class="form-check-label"> Male </span>
                                    </label>
                                    <label class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="gender" value="option2" />
                                        <span class="form-check-label"> Female</span>
                                    </label>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>City</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label>Country</label>
                                        <select id="inputState" class="form-control">
                                            <option> Choose...</option>
                                            <option>Uzbekistan</option>
                                            <option>Russia</option>
                                            <option selected="">United States</option>
                                            <option>India</option>
                                            <option>Afganistan</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Create password</label>
                                    <input class="form-control" type="password" />
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block" onClick={formSubmmithandler}> Submit Form  </button>
                                </div>
                                <small>By clicking the 'Sign Up' button, you confirm that you accept our<br></br> Terms of use and Privacy Policy.</small>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SmallSingnInForm
