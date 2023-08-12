
import FormComponent from "../utils/FormComponent";

export default class QuotationAsideContactForm extends FormComponent {

    constructor(props) {
        super(props);
        const { job_id } = this.props;
        console.log("QuotationForm JobId: " + job_id);

        this.state = {
            title: "Title2"
        }
        
    }

    onSubmit(formData){
        console.log(formData);

        let job = {
          title: formData.title,
          description: formData.description,
          budget_range: formData.budget_range
        }

    }

    render(){

        return (<aside class="col-lg-4" id="sidebar">
        <div class="box_detail booking">
            <div class="price">
                <h5 class="d-inline">Chat</h5>   
            </div>
            <div id="message-contact-detail"></div>
            <div id="messages">
                ... here last messages...
            </div>
            <form method="post" action="assets/contact_detail.php" id="contact_detail" autocomplete="off">
                <div class="form-group">
                    <textarea placeholder="Your message" class="form-control" name="message_detail" id="message_detail"></textarea>
                    <i class="ti-pencil"></i>
                </div>
                <div class="form-group">
                    <input type="submit" value="Contact us" class="add_top_30 btn_1 full-width purchase" id="submit-contact-detail"></input>
                </div>
            </form>
        </div>
        </aside>)


        }


}