import React, { Component } from 'react'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import { actFileUpload } from 'redux/actions/actFileUpload';
import { connect } from 'react-redux';

class ImageUploadBtn extends Component {
    handleUpload = (event) => {
        let reader = new FileReader(); 
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = e => { 
            this.props.upload({ 
                result: e.target.result, 
                data: URL.createObjectURL(event.target.files[0]), 
                name: event.target.files[0].name, 
                type: event.target.files[0].type
            })
        }
    }

    render() {
        if (!this.props.fileUploaded)
            return (
                <>
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        onChange={this.handleUpload}
                        ref={inputRef => this.inputRef = inputRef}
                        accept="image/*"
                    />
                    <Button 
                        variant="outlined" 
                        color="primary" 
                        startIcon={<CloudUploadIcon />} 
                        onClick={() => this.inputRef.click()}
                    >
                        Upload
                    </Button>
                </>
            )
        return <img height="70px" width="70px" alt="" src={this.props.fileUploaded.result} />
    }
}

const mapStateToProps = (state) => ({
    fileUploaded: state.AdminReducer.fileUploaded, 
})

const mapDispatchToProps = (dispatch) => ({
    upload: (file) => dispatch(actFileUpload(file))
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploadBtn);