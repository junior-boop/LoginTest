import React, { useReducer, useContext } from 'react';
import { Login } from './component/loginComponent';
import './style.scss';

//reducer
import tiroir_reducer from './reduce/tiroir_reducer'

// context
import Context_tiroir from './context/tiroir_context'

export default function LoginPage() {

  const [etat, dispatch] = useReducer(tiroir_reducer, false)

  return (
    <Context_tiroir.Provider value = {{etat, dispatch}}>
      <div className="page">
        <div className="loginScreen">
          <Login />
          <Tirroir open = {etat} onClick = {() => dispatch({type : "CLOSE" }) } />
        </div>
      </div>
    </Context_tiroir.Provider>
  );
}

function Tirroir({ onClick, open }) {

  return (
    <div data-open = {open} className="tirroir">
      <div className="content">
        <div className="ilot">
          <h2>Se connecter avec un autre moyen</h2>
          <button style={{ backgroundColor: '#EA4335' }}>
            Vous connectez avec Google{' '}
            <MingcuteGoogleFill width={1.6} style={{ margin: '0 12px' }} />
          </button>
          <button style={{ backgroundColor: '#4285F4' }}>
            Vous connectez avec Facebook{' '}
            <MingcuteFacebookFill width={1.6} style={{ margin: '0 12px' }} />
          </button>
          <hr
            width={'100%'}
            style={{
              margin: '24px 0',
              backgroundColor: 'silver',
              color: 'silver',
              border: '1px solid',
              height: 1,
            }}
          />
        </div>
        <MingcuteCloseLine
          width={2}
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            cursor: 'pointer',
          }}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export function MingcuteCloseLine({ width, ...props }) {
  return (
    <svg
      width={`${width}em`}
      height={`${width}em`}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="m12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586L6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414L12 13.414Z"
        ></path>
      </g>
    </svg>
  );
}

export function MingcuteGoogleFill({ width, ...props }) {
  return (
    <svg
      width={`${width}em`}
      height={`${width}em`}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M12 5.5a6.5 6.5 0 1 0 6.326 8H13a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 1.5 1.5a9.5 9.5 0 1 1-2.801-6.736a1.5 1.5 0 1 1-2.116 2.127A6.475 6.475 0 0 0 12 5.5Z"
        ></path>
      </g>
    </svg>
  );
}

export function MingcuteFacebookFill({ width, ...props }) {
  return (
    <svg
      width={`${width}em`}
      height={`${width}em`}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M13.5 21.888C18.311 21.164 22 17.013 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.013 3.689 9.165 8.5 9.888V15H9a1.5 1.5 0 0 1 0-3h1.5v-2A3.5 3.5 0 0 1 14 6.5h.5a1.5 1.5 0 0 1 0 3H14a.5.5 0 0 0-.5.5v2H15a1.5 1.5 0 0 1 0 3h-1.5v6.888Z"
        ></path>
      </g>
    </svg>
  );
}
