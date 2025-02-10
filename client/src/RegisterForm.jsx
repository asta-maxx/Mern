import React,{useState} from "react";
function RegisterForm(){
    return (
        <div>
            <div>
                <form>
                    <div class="mx-auto border border-slate-500 rounded-md flex flex-col justify-center items-center">
                        <br></br>
                        <table>
                            {/* Assesment Year*/}
                            <tr>
                                <td>
                                    <label class='px-6 mx-3'>Assesment Year</label>
                                </td>   
                                <td></td>
                                <td>
                                    <select class="w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                                        <option>2020-2021</option>
                                        <option>2021-2022</option>
                                        <option>2022-2023</option>
                                        <option>2023-2024</option>
                                    </select>
                                </td>
                            </tr>
                            <br></br>
                            {/* Tax Payer */}
                            <tr>
                                <td>
                                    <label class='px-6 mx-3'>Tax Payer</label>
                                </td>
                                <td></td>
                                <td>
                                    <select class="w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                                        <option>Individual</option>
                                        <option>HUF</option>
                                        <option>LLP</option>
                                        <option>Firms</option>
                                    </select>
                                </td>
                            </tr>
                            <br></br>
                            {/* Category */}
                            <tr>
                                <td>
                                    <label class='px-6 mx-3'>Category (Age)</label>
                                </td>
                                <td></td>
                                <td>
                                    <select class="w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                                        <option>Less than 60 years</option>
                                        <option>Equal to or more than 60 years but less than 80 years</option>
                                        <option>More than 80 years</option>
                                    </select>
                                </td>
                            </tr>
                            <br></br>
                            {/* Residential Status*/}
                            <tr>
                                <td>
                                    <label class='px-6 mx-3'>Residential Staus</label>
                                </td>
                                <td></td>
                                <td>
                                    <select class="w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                                        <option>Resident</option>
                                        <option>Non-Resident</option>             
                                    </select>
                                </td>
                            </tr>
                            <br></br>
                            {/* Net Taxable income */}
                            <tr>
                                <td>
                                    <label class='px-6 mx-3'>Net Taxable Income</label>
                                </td>
                                <td></td>
                                <td>
                                    <input type="number" class=" w-40 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                                    </input>
                                </td>
                            </tr>
                            <br></br>
                            </table>
                        <button class="ml-21 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                                Save
                        </button>
                        <br></br>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default RegisterForm