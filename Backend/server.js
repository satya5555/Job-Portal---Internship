const express = require('express');
const db = require('./db'); 
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/jobportal', (req, res) => {
    console.log("Hello World");
    const sql = "INSERT INTO job(`JobId`,`RoleName`,`CompanyName`,`Experience`,`SkillSet`,`CTC`,`JobType`,`Location`,`PostedDate`,`Noofopening`,`JD`,`EducationQualification`,`ApplyNowLink`,`Remarks`) VALUES (?)";
    const values = [
        req.body.JobId,
        req.body.RoleName,
        req.body.CompanyName,
        req.body.Experience,
        req.body.SkillSet,
        req.body.CTC,
        req.body.JobType,
        req.body.Location,
        req.body.PostedDate,
        req.body.Noofopening,
        req.body.JD,
        req.body.EducationQualification,
        req.body.ApplyNowLink,
        req.body.Remarks
    ];

    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// New endpoint to fetch job data
app.get('/jobs', (req, res) => {
    const sql = "SELECT * FROM job";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Listening...");
});
