import { nanoid } from "nanoid"
import React, { useRef, useState, useEffect } from "react"

const Ripple = ({ bubbleColor }) => {
    const buttonRef = useRef(null)
    const bubbleSizeRef = useRef(null)

    const mainClass = useRef("ripple" + nanoid(5))

    const getSizes = () => {
        if (bubbleSizeRef.current) return bubbleSizeRef.current
        bubbleSizeRef.current = {
            width: buttonRef.current.scrollWidth,
            height: buttonRef.current.scrollHeight
        }
        return bubbleSizeRef.current
    }

    const startRipple = (e) => {
        e.stopPropagation()
        
        const sizes = getSizes()
        const cords = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - cords.x
        const y = e.clientY - cords.y

        const diffX = Math.abs((sizes.width / 2) - x)
        const diffY = Math.abs((sizes.height / 2) - y)

        const diff = diffX > diffY ? diffX : diffY

        const width = sizes.width + (diff * 2)        

        const bubble = document.createElement("span")
        bubble.classList.add("ripple__bubble", "ripple__animation")
        
        document.querySelector(`.${mainClass.current}`).append(bubble)

        bubble.style.cssText = 
        `left: ${x - width / 2}px;
        top: ${y - width / 2}px;
        height: ${width}px;
        width: ${width}px;
        background-color: ${bubbleColor}`
    }

    const removeBubbles = () => {
        const button = document.querySelector(`.${mainClass.current}`)
        if (button.children.length > 0) {
            button.children[button.children.length - 1] 
            && button.children[button.children.length - 1].classList.add(
                "ripple__fade"
            )
            setTimeout(() => {
                button.children[0] && button.removeChild(button.children[0])
            }, 500)
        }
    }

    return (
        <div className="ripple__wrapper">
            <div
                className={`ripple ${mainClass.current}`}
                ref={buttonRef}
                onMouseDown={startRipple}
                onMouseUp={removeBubbles}
                onMouseLeave={removeBubbles}
            />
        </div>
    )
}

export default Ripple
