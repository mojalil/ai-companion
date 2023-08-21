'use client'

import { useEffect, useState } from "react"

interface ImageUploadProps {
    value: string
    onChange: (value: string) => void
    disabled?: boolean
}

const ImageUpload = (
    {value, onChange, disabled}: ImageUploadProps
) => {
    // handle hydration errors

    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true)
    }, []);

    if(!isMounted) {
        return null
    }

    return (
        <div>

        </div>
    )
}

export default ImageUpload