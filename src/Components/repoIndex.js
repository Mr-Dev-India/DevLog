import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function RepoIndex() {
    // Sample data for rows and their corresponding list items with URLs
    const domains = [
        { 
            id: 1, 
            domain: 'Prompt Engineering', 
            subItems: [
                { label: 'Why "Prompts" matter ?', url: 'https://everlasting-trapezoid-82d.notion.site/Why-Prompts-Matter-10374e3a5a0f80e5a1dec5e37e55f449' },
                {label: 'Basics of Prompt', url: 'https://everlasting-trapezoid-82d.notion.site/Basics-of-Prompt-12574e3a5a0f80a3b9a8ea4c72e2fbfc'},
            ]
        },
    ];

    // State to manage which row is currently open
    const [openRow, setOpenRow] = useState(null);

    // Toggle the row to show/hide the list
    const toggleRow = (id) => {
        setOpenRow(openRow === id ? null : id); // Toggle between opening and closing rows
    };

    return (
        <div className="container mt-5" style={{ fontFamily: 'monospace' }}>
            <h2 className="text-center mb-4" style={{ color: '#343a40', fontWeight: 'bold' }}>Index</h2>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th className="text-center" style={{ width: '10%' }}>#</th>
                        <th className="text-center">Domain</th>
                    </tr>
                </thead>
                <tbody>
                    {domains.map((item, index) => (
                        <React.Fragment key={item.id}>
                            {/* Main table row */}
                            <tr 
                                onClick={() => toggleRow(item.id)} 
                                style={{ cursor: 'pointer', backgroundColor: openRow === item.id ? '#f8f9fa' : 'white' }}
                            >
                                <td className="text-center">{index + 1}</td>
                                <td className="d-flex justify-content-between align-items-center">
                                    {item.domain}
                                    {openRow === item.id ? <FaAngleUp /> : <FaAngleDown />}
                                </td>
                            </tr>
                            {/* Collapsible row for the subitems */}
                            <tr>
                                <td colSpan="2" className="p-0">
                                    <div className={`collapse ${openRow === item.id ? 'show' : ''}`}>
                                        <ul className="list-group">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li 
                                                    key={subIndex} 
                                                    className="list-group-item" 
                                                    style={{ backgroundColor: '#f1f1f1', color: '#495057', padding: '10px 20px' }}
                                                >
                                                    <a href={subItem.url} target='_blank' style={{ textDecoration: 'none', color: '#007bff' }}>
                                                        {subItem.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RepoIndex;
