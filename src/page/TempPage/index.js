import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function TempPage() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/todoapp')
    }, [])

    return (
        <div></div>
    )
}

export default TempPage
