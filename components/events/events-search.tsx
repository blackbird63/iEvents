import { useRef } from 'react';
import { NullLiteral } from 'typescript';
import Button from '../ui/button';
import classes from './events-search.module.css';

function EventsSearch(props: { onSearch: (arg0: any, arg1: any) => void; }) {
    const yearInputRef = useRef<HTMLSelectElement>(null);
    const monthInputRef = useRef<HTMLSelectElement>(null);

    function submitHandler(event: { preventDefault: () => void; }) {
        event.preventDefault();

        const selectedYear = (yearInputRef as any).current.value;
        const selectedMonth = (monthInputRef as any).current.value;

        props.onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select name="year" id="year" ref={yearInputRef} >
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Year</label>
                    <select name="month" id="month" ref={monthInputRef} >
                        <option value="1">Janvier</option>
                        <option value="2">Février</option>
                        <option value="3">Mars</option>
                        <option value="4">Avril</option>
                        <option value="5">Mai</option>
                        <option value="6">Juin</option>
                        <option value="7">Juillet</option>
                        <option value="8">Aout</option>
                        <option value="9">Septembre</option>
                        <option value="10">Octobre</option>
                        <option value="11">Novembre</option>
                        <option value="12">Décembre</option>
                    </select>
                </div>
            </div>
            <Button onClick={undefined}>Find Events</Button>
        </form>
    );
}

export default EventsSearch;
