import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



const Modal = () => (
  <Popup trigger={<button className="button"> + note </button>} modal>
    <div class="p-5 overflow-auto">
        <form>
                <input type="text" class="border w-full p-2 rounded" />
                <button class="p-2 border mt-2 float-right text-sm rounded">+ new</button>
        </form>
    </div>
  </Popup>
);

export default Modal