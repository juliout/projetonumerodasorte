import styled from 'styled-components'

export const Switch = styled.label`
    
        position: relative;
        display: inline-block;
        width: 40px;
        height: 12px;
        top: 6px;
        
        input {
            opacity: 0;
            width: 0;
            height: 0;
            :checked + .slider {
            background-color: #2196F3;
        }

        :focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }

        :checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
        }


        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
            
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 12px;
            width: 12px;
            left: -2px;
            bottom: 0px;
            background: rgb(72,186,88);
            background: linear-gradient(311deg, rgba(72,186,88,1) 51%, rgba(255,255,255,1) 100%);
            -webkit-transition: .4s;
            transition: .4s;
            border: 1px solid #48ba58;
            box-shadow: 1px 1px 1px black;

        }


        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }
    
`