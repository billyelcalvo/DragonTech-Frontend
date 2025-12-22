import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ConnectPeopleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 121.28 122.88" fill="currentColor">
        <path d="M50.51,46,64,37a27.93,27.93,0,1,1,6.68,10.72c-.43-.44-.85-.89-1.25-1.35L55.1,55.93a27.8,27.8,0,0,1,.76,6.5,28.37,28.37,0,0,1-.34,4.35L71.67,77.34A27.77,27.77,0,1,1,66.58,87L51.64,77.19a27.93,27.93,0,1,1-4-34.51A29.78,29.78,0,0,1,50.51,46ZM41.4,74.84a19,19,0,0,1-26.93,0L12.8,72.65,14,71.71c2.5-1.48,6.27-1.09,8.73-2.81A7.08,7.08,0,0,0,23.2,68c.23-.53.44-1.1.57-1.49a18.85,18.85,0,0,1-1.49-2.13L20.77,62a4.38,4.38,0,0,1-.86-2.2,1.69,1.69,0,0,1,.15-.79,1.42,1.42,0,0,1,.52-.6,1.55,1.55,0,0,1,.36-.19,38.65,38.65,0,0,1-.07-4.32,5.47,5.47,0,0,1,.19-1,5.78,5.78,0,0,1,2.55-3.26,8.37,8.37,0,0,1,2.14-.95c.48-.13-.41-1.67.09-1.72,2.4-.25,6.29,1.94,8,3.76a5.91,5.91,0,0,1,1.49,3.71l-.1,3.92h0a1.09,1.09,0,0,1,.8.82,3.4,3.4,0,0,1-.42,2.07h0l0,0-1.72,2.84a14.89,14.89,0,0,1-2.12,2.91l.23.33a10.22,10.22,0,0,0,1.12,1.45l0,0c2,1.41,6.81,1.75,8.67,2.78l.07,0,1.22,1a22.07,22.07,0,0,1-1.66,2.16ZM44,46.37a22.72,22.72,0,1,0,6.65,16.06A22.64,22.64,0,0,0,44,46.37Zm63.09,60.25c-5.76,6.39-21.5,6.83-27.43.52l0,0V105.8c0-3.44,5.72-3.5,8.77-5.33,2-1.21,1.68-2.43,1.67-4.44H86.85c-8.32,0-2.84.66-1.71-8.39,1.69-12.77,14.56-12.78,16.46,0C102.82,96.35,108,96,99.89,96H96.64c0,2.22-.36,3.35,1.94,4.6s8.5,1.88,8.5,5v1Zm2.33-27.73A22.72,22.72,0,1,0,116.06,95a22.64,22.64,0,0,0-6.65-16.06Zm-5.47-39.82a19,19,0,0,1-26.93,0l-1.67-2.18L76.56,36c2.5-1.48,6.27-1.09,8.73-2.81a7,7,0,0,0,.46-.88c.23-.53.43-1.1.57-1.49a18.56,18.56,0,0,1-1.5-2.13l-1.51-2.4a4.47,4.47,0,0,1-.86-2.2,1.69,1.69,0,0,1,.15-.79,1.37,1.37,0,0,1,.52-.6,1.43,1.43,0,0,1,.37-.19,36.43,36.43,0,0,1-.07-4.32,5.45,5.45,0,0,1,.18-1,5.76,5.76,0,0,1,2.56-3.26,7.9,7.9,0,0,1,2.14-1c.48-.14-.41-1.67.08-1.72,2.41-.25,6.29,1.94,8,3.76a5.82,5.82,0,0,1,1.48,3.7l-.09,3.93h0a1.1,1.1,0,0,1,.79.82,3.46,3.46,0,0,1-.41,2.07h0l0,0L96.37,28.4a14.49,14.49,0,0,1-2.12,2.91l.23.33a10.3,10.3,0,0,0,1.13,1.45s0,0,0,0c2,1.4,6.82,1.74,8.67,2.78l.08,0,1.22,1a22,22,0,0,1-1.67,2.15Zm2.59-27.2a22.72,22.72,0,1,0,6.65,16.06,22.64,22.64,0,0,0-6.65-16.06Z" />
    </svg>
)

const FeedbackIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 115.79 122.88" fill="currentColor">
        <path d="M67.7,21.98c10.81,0,14.15,0.09,24.97,0.09c1.23,0,2.42,0.11,3.57,0.33c1.14,0.22,2.23,0.53,3.25,0.97 c1.03,0.43,2.02,0.98,2.98,1.62c0.95,0.64,1.85,1.39,2.7,2.23c0.85,0.85,1.6,1.76,2.23,2.7c0.65,0.96,1.2,1.96,1.62,2.98 c0.42,1.03,0.75,2.11,0.97,3.25c0.22,1.15,0.33,2.33,0.33,3.57V75.5c0,1.23-0.11,2.42-0.33,3.56c-0.22,1.15-0.54,2.23-0.97,3.25 c-0.43,1.04-0.98,2.03-1.62,2.98c-0.64,0.95-1.39,1.85-2.23,2.7L105.15,88c-0.88,0.86-1.8,1.61-2.75,2.24 c-0.95,0.64-1.95,1.17-2.97,1.61c-1.03,0.42-2.1,0.75-3.24,0.97c-1.13,0.22-2.31,0.33-3.54,0.33H79.15c-0.42,0-0.84,0.1-1.22,0.29 c-0.36,0.18-0.68,0.43-0.93,0.77l-0.02,0.02c-1.07,1.41-2.18,2.79-3.36,4.11c-1.18,1.31-2.4,2.59-3.71,3.79 c-1.27,1.19-2.62,2.32-4.01,3.42c-1.39,1.1-2.84,2.12-4.31,3.09c-1.41,0.93-2.9,1.82-4.45,2.66c-1.53,0.83-3.1,1.6-4.7,2.31 c-0.18,0.08-0.38,0.07-0.55-0.03c-0.3-0.17-0.4-0.55-0.24-0.85c0.29-0.5,0.56-1.01,0.84-1.54c0.27-0.49,0.5-1,0.74-1.53l0,0 c0.45-1.02,0.89-2.05,1.3-3.12c0.42-1.08,0.82-2.15,1.2-3.27c0.37-1.04,0.7-2.11,1.03-3.2c0.33-1.09,0.63-2.18,0.93-3.28 c0.08-0.33,0.16-0.65,0.16-0.99c0-0.73-0.3-1.41-0.78-1.9l-0.03-0.03c-0.49-0.49-1.19-0.81-1.93-0.81H39.4 c-1.23,0-2.41-0.11-3.54-0.33c-1.12-0.22-2.18-0.53-3.2-0.96l-0.02-0.01c-1.01-0.4-1.99-0.93-2.92-1.56 c-0.97-0.65-1.91-1.43-2.81-2.3l-0.01-0.01c-0.85-0.85-1.6-1.75-2.24-2.7c-0.65-0.96-1.19-1.95-1.62-2.98 c-0.42-1.03-0.75-2.11-0.97-3.25c-0.22-1.15-0.33-2.33-0.33-3.57v-7.28c0-3.65-4.73-3.68-5.52-1.08v8.31 c0,1.56,0.15,3.08,0.42,4.54c0.29,1.49,0.71,2.93,1.27,4.34c0.55,1.35,1.25,2.66,2.1,3.91c0.85,1.24,1.84,2.44,2.96,3.57 c1.12,1.13,2.31,2.11,3.57,2.96c1.23,0.84,2.54,1.54,3.89,2.09l0.02,0.01c1.39,0.56,2.84,0.99,4.33,1.27 c1.46,0.28,2.98,0.42,4.54,0.42h11.29c0.07,0,0.15,0.01,0.22,0.03c0.33,0.11,0.5,0.45,0.4,0.78l-0.01,0.02 c-0.22,0.69-0.43,1.38-0.68,2.12l-0.01,0.04c-0.35,1-0.73,2.02-1.14,3.03c-0.38,0.96-0.78,1.91-1.19,2.82 c-0.01,0.05-0.02,0.09-0.04,0.14c-0.41,0.92-0.87,1.83-1.41,2.73c-0.53,0.9-1.14,1.78-1.79,2.65c-0.67,0.87-1.42,1.75-2.25,2.64 l-0.03,0.04c-0.84,0.89-1.75,1.77-2.73,2.62c-0.56,0.5-0.87,1.2-0.91,1.89c-0.04,0.69,0.19,1.4,0.69,1.97 c0.36,0.39,0.79,0.66,1.26,0.8c0.47,0.14,0.99,0.16,1.47,0.02c2.05-0.55,4.07-1.16,6.02-1.83c1.96-0.67,3.85-1.4,5.67-2.19 c1.84-0.79,3.63-1.66,5.37-2.6c1.73-0.93,3.41-1.94,5.03-3l0,0c1.61-1.05,3.17-2.16,4.68-3.35c1.51-1.19,2.96-2.43,4.36-3.72 l0.03-0.03c1.17-1.11,2.31-2.27,3.42-3.48c1.12-1.22,2.19-2.49,3.2-3.77c0.11-0.17,0.31-0.29,0.52-0.29h11.87 c1.59,0,3.11-0.15,4.58-0.42c1.48-0.29,2.9-0.71,4.27-1.26l0.02-0.01c1.37-0.58,2.68-1.29,3.93-2.13c1.24-0.84,2.43-1.81,3.56-2.93 c1.13-1.13,2.11-2.32,2.96-3.57c0.84-1.24,1.55-2.56,2.1-3.91c0.56-1.37,0.99-2.81,1.27-4.3c0.28-1.46,0.42-2.99,0.42-4.58V39.61 c0-1.59-0.15-3.12-0.42-4.58c-0.29-1.49-0.71-2.92-1.27-4.29c-0.55-1.35-1.26-2.67-2.1-3.91c-0.85-1.25-1.84-2.45-2.95-3.57 c-1.13-1.13-2.31-2.11-3.57-2.96c-1.23-0.84-2.54-1.54-3.89-2.09l-0.02-0.01c-1.4-0.56-2.84-0.99-4.34-1.27 c-1.46-0.28-2.98-0.42-4.54-0.42c-11.24,0-15-0.05-26.24-0.05C63.76,17.23,63.58,21.98,67.7,21.98L67.7,21.98L67.7,21.98z M45.59,77.13c-1.43,0.02-2.6-1.13-2.62-2.56c-0.02-1.43,1.13-2.6,2.56-2.62l27.44-0.42l5.25-0.34c1.43-0.09,2.66,1,2.75,2.42 c0.09,1.43-1,2.66-2.42,2.75l-5.25,0.34C73.29,76.7,47.9,77.09,45.59,77.13L45.59,77.13L45.59,77.13z M53.8,60.87 c-1.43,0-2.6-1.16-2.6-2.6c0-1.43,1.17-2.6,2.6-2.6h37.06c1.43,0,2.6,1.17,2.6,2.6c0,1.43-1.17,2.6-2.6,2.6H53.8L53.8,60.87 L53.8,60.87z M65.34,45.36c-1.43,0-2.6-1.17-2.6-2.6c0-1.43,1.17-2.6,2.6-2.6h25.52c1.43,0,2.6,1.17,2.6,2.6 c0,1.43-1.17,2.6-2.6,2.6H65.34L65.34,45.36L65.34,45.36z" />
        <path fill="#FFD401" d="M29.88,0.91l7.29,17.07l18.49,1.66c0.82,0.07,1.42,0.79,1.35,1.6c-0.03,0.4-0.22,0.74-0.5,0.99v0L54,24.42 c-6.79,2.35-15.72,3.78-25.5,3.78c-9.78,0-18.71-1.43-25.5-3.78l-2.5-2.18c-0.62-0.54-0.68-1.48-0.14-2.09 c0.27-0.31,0.65-0.48,1.04-0.5l18.44-1.65L27.14,0.9c0.32-0.75,1.19-1.11,1.95-0.79C29.46,0.28,29.73,0.57,29.88,0.91L29.88,0.91 L29.88,0.91z" />
    </svg>
)

const Support24Icon = ({ className }) => (
    <svg className={className} viewBox="0 0 122.88 118.21" fill="currentColor">
        <path d="M45.34,6.14a4,4,0,0,0,3.23,7.24,67.7,67.7,0,0,1,7.19-3.1c4.54-1.51,3-8.5-2-7.67a44.76,44.76,0,0,0-8.4,3.53Zm7.34,52.75V52.68L62,43.16a18.79,18.79,0,0,0,1.49-1.65,7.68,7.68,0,0,0,1-1.49,3.46,3.46,0,0,0,.34-1.5,2.67,2.67,0,0,0-.32-1.39,1.79,1.79,0,0,0-1-.78,5.09,5.09,0,0,0-1.71-.24H53.16V29.9c1.32-.3,2.79-.57,4.42-.83a37.53,37.53,0,0,1,5.66-.38,13.09,13.09,0,0,1,5.58,1,5.76,5.76,0,0,1,2.91,2.86,11.06,11.06,0,0,1,.86,4.63,11.53,11.53,0,0,1-.52,3.59,11.3,11.3,0,0,1-1.51,3,21.45,21.45,0,0,1-2.4,2.82L63,51.87H73.4v7Zm36,0V53.36H76.24l-1.37-3.43,8.67-21h8L84.19,46.75H88.7V42.31l1.49-3.87h6.33v8.31h2.42v5.4l-2.42,1.21v5.53ZM29.91,54.57A90.17,90.17,0,0,0,43.23,73.24,76,76,0,0,0,64.35,88.82a2.13,2.13,0,0,0,1.82.09,7.76,7.76,0,0,0,2.54-1.85A28.38,28.38,0,0,0,71,84.22c3.39-4.46,7.59-10,13.52-7.23l.36.19,19.77,11.37.2.13a8.94,8.94,0,0,1,3.71,7.7,20.84,20.84,0,0,1-2.89,9.8,20.15,20.15,0,0,1-9.52,8.41,43.45,43.45,0,0,1-11.73,3.19,39.68,39.68,0,0,1-17.92-1.5,79.12,79.12,0,0,1-18-8.7l-.45-.29c-2.94-1.82-6.1-3.78-9.19-6.09-11.38-8.57-22.94-21-30.47-34.57C2.08,55.19-1.37,42.84.52,31.08c1-6.45,3.81-12.32,8.63-16.2,4.2-3.39,9.87-5.24,17.21-4.59a2.46,2.46,0,0,1,2,1.27L41,33a6.7,6.7,0,0,1,1.07,7.17,14.09,14.09,0,0,1-4.85,5.44c-.69.59-1.5,1.17-2.35,1.79-2.83,2.05-6.06,4.43-4.95,7.24l0-.07Zm78.77,21.65A4,4,0,0,0,115,80.94a4.54,4.54,0,0,0,.52-.7,45.31,45.31,0,0,0,3.56-7.95,4,4,0,0,0-7.1-3.46,4.31,4.31,0,0,0-.4.84,38.33,38.33,0,0,1-2.91,6.55Zm6.15-21.07a4,4,0,0,0,7.77,1.49,4.24,4.24,0,0,0,.15-.79,50.62,50.62,0,0,0-.12-8.7,4,4,0,0,0-7.81-.58,4.42,4.42,0,0,0-.1,1.41,40.94,40.94,0,0,1,.11,7.17Zm-3.92-21.22a4,4,0,0,0,7.24-3.28,51.17,51.17,0,0,0-4.21-7.51,4,4,0,1,0-6.58,4.46,43.63,43.63,0,0,1,3.55,6.33ZM97.36,17.07c4.17,3.05,9-3,4.78-6.35a53.9,53.9,0,0,0-7.27-4.59C90.79,4,86.82,9.57,90.49,12.71a4.16,4.16,0,0,0,.71.47,45.31,45.31,0,0,1,6.16,3.89Zm-20-8.52A4,4,0,0,0,79.7,1a4.08,4.08,0,0,0-1-.31A57,57,0,0,0,70.11,0a4,4,0,1,0,0,8,49.17,49.17,0,0,1,7.27.6Z" />
    </svg>
)

const PackageDeliveryIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 121.52 122.88" fill="currentColor">
        <path d="M49.91,26.09l53.86-13.45c1.52-0.38,3.08,0.56,3.46,2.08l13.45,53.86c0.38,1.52-0.56,3.08-2.08,3.46 L64.75,85.49c-1.52,0.38-3.08-0.56-3.46-2.08L47.83,29.55C47.45,28.03,48.39,26.47,49.91,26.09L49.91,26.09L49.91,26.09z M54.59,90.54c8.93,0,16.17,7.24,16.17,16.17c0,8.93-7.24,16.17-16.17,16.17c-8.93,0-16.17-7.24-16.17-16.17 C38.42,97.78,45.66,90.54,54.59,90.54L54.59,90.54z M74,92.69l41.87-11.22l2.51-0.67l0.67,2.51l1.8,6.72l0.67,2.51l-2.51,0.67 l-41.87,11.22l-2.51,0.67l-0.67-2.51l-1.8-6.72l-0.67-2.51L74,92.69L74,92.69L74,92.69z M4.21,0.04l8.34,1.45 c9.58,1.67,14.41,2.63,17.54,5.12c3.37,2.68,4.13,6.28,5.59,13.26c0.27,1.27,0.56,2.69,0.96,4.4c0.36,1.58,0.82,3.43,1.42,5.64 l14.87,54.67c0.38,1.39-0.44,2.81-1.83,3.19c-0.04,0.01-0.08,0.02-0.12,0.03l-6.61,1.79c-1.38,0.37-2.81-0.45-3.18-1.83l0,0 l-6.76-24.85l-8.11-29.82c-0.56-2.08-1.05-4.08-1.47-5.94l-0.02-0.12c-0.41-1.8-0.73-3.33-1.02-4.7c-0.73-3.47-1.1-5.27-2.23-6.08 c-1.47-1.07-4.67-1.67-11.06-2.79l-3.23-0.56l-5.11-0.89c-1.42-0.24-2.37-1.58-2.12-3l1.17-6.86C1.45,0.75,2.79-0.2,4.21,0.04 L4.21,0.04z" />
    </svg>
)

export function StatsSection() {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const statsRef = useRef(null)
    const iconRefs = useRef([])
    const cardRefs = useRef([])
    const glowRefs = useRef([])

    const stats = [
        {
            value: "50K+",
            label: "Clientes Satisfechos",
            Icon: ConnectPeopleIcon,
            gradientFrom: "from-bright-sky",
            gradientTo: "to-jade-green",
            glowColor: "rgba(0, 186, 199, 0.4)"
        },
        {
            value: "99%",
            label: "Tasa de Satisfacción",
            Icon: FeedbackIcon,
            gradientFrom: "from-jade-green",
            gradientTo: "to-emerald-400",
            glowColor: "rgba(41, 171, 135, 0.4)"
        },
        {
            value: "24/7",
            label: "Soporte Técnico",
            Icon: Support24Icon,
            gradientFrom: "from-yale-blue",
            gradientTo: "to-bright-sky",
            glowColor: "rgba(15, 76, 129, 0.4)"
        },
        {
            value: "500+",
            label: "Productos Tech",
            Icon: PackageDeliveryIcon,
            gradientFrom: "from-purple-500",
            gradientTo: "to-jade-green",
            glowColor: "rgba(168, 85, 247, 0.4)"
        },
    ];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current.children,
                { opacity: 0, y: 30, rotateX: -45 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 0.9,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            )

            gsap.fromTo(cardRefs.current,
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.6,
                    rotateY: -90,
                    transformPerspective: 1000
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            )

            iconRefs.current.forEach((icon, index) => {
                if (!icon) return

                gsap.fromTo(icon,
                    { scale: 0, rotation: -360 },
                    {
                        scale: 1,
                        rotation: 0,
                        duration: 0.8,
                        delay: 0.5 + (index * 0.15),
                        ease: "elastic.out(1, 0.5)",
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none"
                        }
                    }
                )

                gsap.to(icon, {
                    y: -5,
                    duration: 1.5 + (index * 0.2),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 1.5 + (index * 0.1)
                })
            })

            glowRefs.current.forEach((glow, index) => {
                if (!glow) return

                gsap.to(glow, {
                    opacity: 0.8,
                    scale: 1.3,
                    duration: 2 + (index * 0.3),
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.2
                })
            })

        }, sectionRef)

        const handleMouseEnter = (index) => {
            const card = cardRefs.current[index]
            const icon = iconRefs.current[index]

            if (card) {
                gsap.to(card, {
                    scale: 1.08,
                    y: -15,
                    rotateX: 5,
                    rotateY: 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    duration: 0.4,
                    ease: "power2.out"
                })
            }

            if (icon) {
                gsap.to(icon, {
                    scale: 1.3,
                    rotation: 15,
                    duration: 0.3,
                    ease: "back.out(2)"
                })
            }
        }

        const handleMouseLeave = (index) => {
            const card = cardRefs.current[index]
            const icon = iconRefs.current[index]

            if (card) {
                gsap.to(card, {
                    scale: 1,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    boxShadow: "none",
                    duration: 0.4,
                    ease: "power2.out"
                })
            }

            if (icon) {
                gsap.to(icon, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out"
                })
            }
        }

        cardRefs.current.forEach((card, index) => {
            if (card) {
                card.addEventListener('mouseenter', () => handleMouseEnter(index))
                card.addEventListener('mouseleave', () => handleMouseLeave(index))
            }
        })

        return () => {
            ctx.revert()
            cardRefs.current.forEach((card, index) => {
                if (card) {
                    card.removeEventListener('mouseenter', () => handleMouseEnter(index))
                    card.removeEventListener('mouseleave', () => handleMouseLeave(index))
                }
            })
        }
    }, [])

    return (
        <section ref={sectionRef} className="py-24 bg-gradient-to-br from-yale-blue via-yale-blue to-jade-green relative overflow-hidden">

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-bright-sky/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-jade-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div ref={headerRef} className="text-center mb-16" style={{ perspective: '1000px' }}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 opacity-0">La Confianza de Miles</h2>
                    <p className="text-white/70 text-xl opacity-0">Números que hablan por sí solos</p>
                </div>

                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{ perspective: '1000px' }}>
                    {stats.map((stat, index) => {
                        const Icon = stat.Icon
                        return (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                className="text-center group cursor-pointer opacity-0"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <div className="relative">
                                    <div
                                        ref={el => glowRefs.current[index] = el}
                                        className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo} opacity-40 blur-xl`}
                                    ></div>

                                    <div className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo} flex items-center justify-center shadow-2xl border border-white/30 overflow-hidden`}>
                                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                                        <Icon
                                            ref={el => iconRefs.current[index] = el}
                                            className="w-10 h-10 text-white relative z-10 drop-shadow-lg"
                                        />
                                    </div>
                                </div>

                                <div className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-white/80 font-semibold text-lg">{stat.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
