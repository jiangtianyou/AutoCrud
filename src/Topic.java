package com.wdit.modules.community.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import javax.validation.constraints.NotNull;
import java.util.Date;
/**
 * 社区话题(和圈子无关联)
 */
@Document(collection = "community_topic")
public class Topic {

	@Id
	private String id;

	@Field("topic_name")
	@NotNull
	@Indexed(name = "idx_community_topic_topic_name", unique = true) // 索引
	private String topicName;

	@Field("site_id")
	@NotNull
	private String siteId;

	@Field("sort")
	@Indexed(name = "idx_hotspot_sort", direction = IndexDirection.DESCENDING) // 索引
	@NotNull
	private Integer sort = 0; //大的排前面-排序 默认0

	@Field("description")
	private String description; // 描述

	@Field( "create_date" )
	@NotNull
	private Date createDate;

	@NotNull
	private List<String> ids;

	// ----------------------------------------------------------------------
	// ----------------------------------------------------------------------
	// ----------------------------------------------------------------------
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTopicName() {
		return topicName;
	}

	public void setTopicName(String topicName) {
		this.topicName = topicName;
	}

	public String getSiteId() {
		return siteId;
	}

	public void setSiteId(String siteId) {
		this.siteId = siteId;
	}

	public Integer getSort() {
		return sort;
	}

	public void setSort(Integer sort) {
		this.sort = sort;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
}
