import { useReducer } from 'react';

const initialState = {
    email: '',
    text: ''
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_TEXT':
            return { ...state, text: action.payload };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};

const Feedback = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleClick() {
        alert("Thank you for your feedback!");
        dispatch({ type: 'RESET' });
    }

    const handleEmailChange = (e) => {
        dispatch({ type: 'SET_EMAIL', payload: e.target.value });
    };

    const handleTextChange = (e) => {
        dispatch({ type: 'SET_TEXT', payload: e.target.value });
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-8 mx-auto">
                        <div className="card" style={{width: '50rem'}}>
                            <div className="card-body">
                                <h1 className="card-title">Leave us some feedback!</h1>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email
                                            address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1"
                                               placeholder="name@example.com" required value={state.email}
                                               onChange={handleEmailChange}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">How would
                                            you rate the overall performance of the CMIS?</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}
                                                  required value={state.text} onChange={handleTextChange}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea2" className="form-label">What was
                                            your experience using this CMIS?</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea2" rows={3}
                                                  required value={state.text} onChange={handleTextChange}></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea3" className="form-label">Do you have
                                            any suggestions for improving this CMIS?</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea3" rows={3}
                                                  required value={state.text} onChange={handleTextChange}></textarea>
                                    </div>
                                    <button type="button" className="btn btn-primary" onClick={handleClick}>Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feedback;