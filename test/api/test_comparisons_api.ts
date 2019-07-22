/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2019 Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";
import { Options, Settings, ItemsStyle, ComparisonsRequest} from "../../src/model";
import * as TestContext from "../test_context";
import { TestFile } from "../test_file";

describe("comparisons_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });

    describe("test_comparisons_api", () => {

        it("test_comparisons_cells", async () => {              
            var options = GetComparisonOptions(TestFile.SourceCell, TestFile.TargetCell)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });

        it("test_comparisons_diagram", async () => {              
            var options = GetComparisonOptions(TestFile.SourceDiagram, TestFile.TargetDiagram)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });
        
        it("test_comparisons_email", async () => {              
            var options = GetComparisonOptions(TestFile.SourceEmail, TestFile.TargetEmail)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });
        
        it("test_comparisons_html", async () => {              
            var options = GetComparisonOptions(TestFile.SourceHtml, TestFile.TargetHtml)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });
        
        it("test_comparisons_image", async () => {              
            var options = GetComparisonOptions(TestFile.SourceImage, TestFile.TargetImage)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });
        
        it("test_comparisons_note", async () => {              
            var options = GetComparisonOptions(TestFile.SourceNote, TestFile.TargetNote)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });
        
        it("test_comparisons_note_protected", async () => {              
            var options = GetComparisonOptions(TestFile.SourceNoteProtected, TestFile.TargetNoteProtected)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });
        
        it("test_comparisons_pdf", async () => {              
            var options = GetComparisonOptions(TestFile.SourcePdf, TestFile.TargetPdf)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });
        
        it("test_comparisons_pdf_protected", async () => {              
            var options = GetComparisonOptions(TestFile.SourcePdfProtected, TestFile.TargetPdfProtected)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });
        
        it("test_comparisons_text", async () => {              
            var options = GetComparisonOptions(TestFile.SourceText, TestFile.TargetText)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });

        it("test_comparisons_word", async () => {              
            var options = GetComparisonOptions(TestFile.SourceWord, TestFile.TargetWord)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });
        
        it("test_comparisons_word_protected", async () => {              
            var options = GetComparisonOptions(TestFile.SourceWordProtected, TestFile.TargetWordProtected)
            var response = await TestContext.getCompareApi().comparisons(new ComparisonsRequest(options));
            expect(response.href).equal(options.outputPath);
        });        

        function GetComparisonOptions(source: TestFile, target: TestFile)
        {
            let options = new Options();
            options.sourceFile = source.ToFileInfo();
            options.outputPath = "/resultFilePath/" + source.fileName;
            
            options.settings = new Settings();
            options.settings.generateSummaryPage = true;
            options.settings.showDeletedContent = true;
            options.settings.styleChangeDetection = true;
            options.settings.useFramesForDelInsElements = false;
            options.settings.metaData = undefined;
            options.settings.detailLevel = "Low";
            options.settings.diagramMasterSetting = undefined;
            options.settings.calculateComponentCoordinates = false;
            options.settings.cloneMetadata = "Default";
            options.settings.markDeletedInsertedContentDeep = false;
            options.settings.password = "1111";
            options.settings.passwordSaveOption = "User";
            
            options.settings.deletedItemsStyle = new ItemsStyle();
            options.settings.deletedItemsStyle.beginSeparatorString = "";
            options.settings.deletedItemsStyle.endSeparatorString = "";
            options.settings.deletedItemsStyle.fontColor = "16711680";
            options.settings.deletedItemsStyle.highlightColor = "16711680";
            options.settings.deletedItemsStyle.bold = false;
            options.settings.deletedItemsStyle.italic = false;
            options.settings.deletedItemsStyle.strikeThrough = false;
            
            options.settings.insertedItemsStyle = new ItemsStyle();
            options.settings.insertedItemsStyle.beginSeparatorString = "";
            options.settings.insertedItemsStyle.endSeparatorString = "";
            options.settings.insertedItemsStyle.fontColor = "255";
            options.settings.insertedItemsStyle.highlightColor = "255";
            options.settings.insertedItemsStyle.bold = false;
            options.settings.insertedItemsStyle.italic = false;
            options.settings.insertedItemsStyle.strikeThrough = false;
            
            options.settings.styleChangedItemsStyle = new ItemsStyle();
            options.settings.styleChangedItemsStyle.beginSeparatorString = "";
            options.settings.styleChangedItemsStyle.endSeparatorString = "";
            options.settings.styleChangedItemsStyle.fontColor = "65280";
            options.settings.styleChangedItemsStyle.highlightColor = "65280";
            options.settings.styleChangedItemsStyle.bold = false;
            options.settings.styleChangedItemsStyle.italic = false;
            options.settings.styleChangedItemsStyle.strikeThrough = false;
        
            options.targetFiles = [target.ToFileInfo()];

            return options;
        }
    });
    
});