import { useState } from "react";
import './create-modal.css';
import { useFoodDataMutate } from "../../../hooks/useFoodDataMutate";
import type { FoodData } from "../../../interface/FoodData";

interface InputProps {
    label: string;
    value: string;
    updateValue: (value: string) => void;
}
const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)} />
        </div>
    )
}

interface CreateModalProps {
    onClose: () => void;
}

export function CreateModal({ onClose }: CreateModalProps) {

    const [title, setTitle] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [priceInput, setPriceInput] = useState("");
    const [img, setImg] = useState<string>('');
    const { mutate } = useFoodDataMutate();

    const isValid = () => {
        return title.trim().length > 0 && !Number.isNaN(price) && price > 0 && img.trim().length > 0 && img.trim().length <= 255;
    }

    const submitForm = () => {
        if (!isValid()) return;

        const foodData: FoodData = {
            title: title.trim(),
            price,
            img: img.trim().slice(0, 255),
        };

        mutate(foodData);
        onClose();
    }


    return (
        <>
            <div className="model-backdrop">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Criar novo item</h2>
                        <button className="btn-close" onClick={onClose} aria-label="Fechar modal">×</button>
                    </div>
                    <form action="" className="create-form" onSubmit={e => { e.preventDefault(); submitForm(); }}>
                        <Input label="title" value={title} updateValue={setTitle} />
                        <Input
                            label="price"
                            value={priceInput}
                            updateValue={(v) => {
                                setPriceInput(v);
                                const numeric = parseFloat(v.replace(",", "."));
                                if (!isNaN(numeric)) {
                                    setPrice(numeric);
                                }
                            }}
                        />
                        <Input label="img" value={img} updateValue={setImg} />
                        <button type="submit" onClick={submitForm} className="btn-submit" disabled={!isValid()}>Criar</button>
                    </form>
                </div>
            </div>
        </>
    )
}   
