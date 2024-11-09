import { React } from "react";
import { createPortal } from "react-dom";
import '../../css/modal.css';

function Modal({ children, updateModal, setSearchValue }) {
    const close = () => {
        setSearchValue('');
        updateModal(false);
    }

    return createPortal(
        (
            <div className="modal" style={{display: "block"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Información</h5>
                        <button
                            type="button"
                            className="btn btn-close close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={close}
                        >X</button>
                    </div>
                    <div className="modal-body">
                        <p>Se ha creado la tarea "{ children }"</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={close}
                        >
                            Aceptar
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        ),
        document.getElementById('modal')
    );
}

export { Modal };